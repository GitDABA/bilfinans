#!/bin/bash
set -eo pipefail

echo "=== NETLIFY BUILD SCRIPT ==="
echo "Node version: $(node -v)"
echo "PNPM version: $(pnpm -v)"
echo "Directory structure:"
ls -la

echo "=== INSTALLING DEPENDENCIES ==="
pnpm install --frozen-lockfile

echo "=== WORKSPACE DEPENDENCIES ==="
pnpm list -r

echo "=== BUILDING WEB APP ==="
cd apps/web
echo "Environment variables (redacted values):"
env | grep -E 'NEXT_PUBLIC_|SANITY_|NODE_' | sed 's/=.*$/=REDACTED/'

echo "Running Next.js build with extra diagnostics..."
NODE_OPTIONS="--max-old-space-size=4096" NEXT_TELEMETRY_DISABLED=1 pnpm run build

echo "=== BUILD COMPLETED SUCCESSFULLY ==="
