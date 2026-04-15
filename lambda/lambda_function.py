import json
import boto3
from botocore.exceptions import ClientError

RECIPIENT = "orcamento@gromar.com.br"
SENDER    = "orcamento@gromar.com.br"
REGION    = "sa-east-1"

ses = boto3.client("sesv2", region_name=REGION)

ALLOWED_ORIGINS = [
    "https://www.gromar.com.br",
    "https://gromar.com.br",
    "http://localhost",
]

def cors_headers(origin):
    allowed = origin if origin in ALLOWED_ORIGINS else ALLOWED_ORIGINS[0]
    return {
        "Access-Control-Allow-Origin":  allowed,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
    }

def respond(status, body, origin=""):
    return {
        "statusCode": status,
        "headers": cors_headers(origin),
        "body": json.dumps(body),
    }

def lambda_handler(event, context):
    origin = (event.get("headers") or {}).get("origin", "")

    # Preflight CORS
    if event.get("requestContext", {}).get("http", {}).get("method") == "OPTIONS":
        return respond(200, {}, origin)

    try:
        body = json.loads(event.get("body") or "{}")
    except json.JSONDecodeError:
        return respond(400, {"error": "Invalid JSON"}, origin)

    name    = (body.get("name")    or "").strip()
    email   = (body.get("email")   or "").strip()
    phone   = (body.get("phone")   or "").strip()
    message = (body.get("message") or "").strip()

    if not name or not email or not message:
        return respond(400, {"error": "Campos obrigatórios: name, email, message"}, origin)

    subject = f"[Site Gromar] Contato de {name}"
    body_text = (
        f"Nome: {name}\n"
        f"E-mail: {email}\n"
        f"Telefone: {phone or '—'}\n\n"
        f"Mensagem:\n{message}"
    )
    body_html = f"""
    <h2 style="color:#1e2d3d">Nova mensagem pelo site Gromar</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:6px 12px;font-weight:bold">Nome</td><td style="padding:6px 12px">{name}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold">E-mail</td><td style="padding:6px 12px"><a href="mailto:{email}">{email}</a></td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold">Telefone</td><td style="padding:6px 12px">{phone or '—'}</td></tr>
    </table>
    <h3 style="color:#1e2d3d;margin-top:20px">Mensagem</h3>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">{message}</p>
    """

    try:
        ses.send_email(
            FromEmailAddress=SENDER,
            Destination={"ToAddresses": [RECIPIENT]},
            ReplyToAddresses=[email],
            Content={
                "Simple": {
                    "Subject": {"Data": subject, "Charset": "UTF-8"},
                    "Body": {
                        "Text": {"Data": body_text, "Charset": "UTF-8"},
                        "Html": {"Data": body_html, "Charset": "UTF-8"},
                    },
                }
            },
        )
    except ClientError as e:
        print(f"SES error: {e}")
        return respond(500, {"error": "Falha ao enviar e-mail"}, origin)

    return respond(200, {"ok": True}, origin)
