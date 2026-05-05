#!/bin/bash
# Deploy gromar-site → S3 + invalidate CloudFront
# (Substituiu Amplify Hosting em 2026-05-05; ver infra/stacks/site_estatico_stack.py
# no repo gromar-erp pra a stack CDK que provisiona bucket/distribution.)
#
# Pre-requisitos:
#   - AWS CLI configurado (creds com permissao em S3 + CloudFront)
#   - Estar no diretorio raiz do repo gromar-site

set -e

BUCKET=gromar-site-prod
DIST_ID=E2D6AGPL1VEOQ3

echo "========================================="
echo "  Deploy Gromar Site → S3 + CloudFront"
echo "========================================="

echo ""
echo "→ Sync S3..."
aws s3 sync . s3://$BUCKET/ \
  --exclude ".git/*" \
  --exclude ".github/*" \
  --exclude ".claude/*" \
  --exclude "lambda/*" \
  --exclude "amplify.yml" \
  --exclude "deploy.sh" \
  --exclude ".gitignore" \
  --exclude "README.md" \
  --delete

echo ""
echo "→ Invalidate CloudFront..."
INV_ID=$(aws cloudfront create-invalidation \
  --distribution-id $DIST_ID --paths "/*" \
  --query 'Invalidation.Id' --output text)
echo "  invalidation $INV_ID criada"

echo ""
echo "Deploy concluido!"
echo "https://gromar.com.br"
