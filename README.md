# gromar-site

Site institucional `gromar.com.br` — HTML estático puro hospedado em S3 + CloudFront.

## Deploy

```bash
cd C:\Users\peron\Documents\Github\gromar-site
./deploy.sh
```

O script faz `aws s3 sync` pro bucket `gromar-site-prod` e dispara invalidação no CloudFront `E2D6AGPL1VEOQ3`. Requer AWS CLI configurado com permissão em S3 + CloudFront.

## Infra

A stack CDK que provisiona bucket, distribution, certificado ACM e records Route 53 está no repo **gromar-erp** em `infra/stacks/site_estatico_stack.py`.

## Form de contato

`lambda/lambda_function.py` é o backend do formulário (SES). Deployado como Lambda separada — não migra junto com o site estático.
