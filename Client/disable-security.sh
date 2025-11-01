#!/bin/bash

# Watson Orchestrate - Disable Security for Embedded Chat
# This script disables security for embedded webchat (testing only)
# 
# WARNING: This is for testing/development only. NOT recommended for production.
# Disabling security allows anonymous access to your Watson Orchestrate instance.

# Configuration - UPDATE THESE VALUES
ORCHESTRATION_ID="20251027-2225-5441-0060-2bc997cc28f2_20251027-2226-0773-200d-659bd8c521bf"
INSTANCE_ID="20251027-2226-0773-200d-659bd8c521bf"  # Extract from orchestration ID (part after underscore)
SERVICE_INSTANCE_URL="https://dl.watson-orchestrate.ibm.com/instances/${INSTANCE_ID}"  # Your Watson Orchestrate service URL
API_KEY="azE6dXNyXzcwZTBjZmEyLWE2MGYtMzhhMS1iODJlLThhNmExODk5NmFlYjpPYXZXZHZHajNZQTQySWRocHJ3QU43OUpmVStIVG94Ly81N1cyTFlQaXdVPTpGTHNZ"


# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Watson Orchestrate - Disable Security for Embedded Chat${NC}"
echo -e "${RED}WARNING: This will disable security. Use only for testing!${NC}\n"

# Check if curl is available
if ! command -v curl &> /dev/null; then
    echo -e "${RED}Error: curl is required but not installed.${NC}"
    exit 1
fi

# Validate configuration
if [ "$API_KEY" == "YOUR_API_KEY" ]; then
    echo -e "${RED}Error: Please update API_KEY in this script${NC}"
    echo -e "${YELLOW}You can find your API key in IBM Cloud Dashboard > Manage > Access (IAM) > API keys${NC}"
    exit 1
fi

# Get IAM token from API key
echo -e "${YELLOW}Getting IAM token...${NC}"
IAM_TOKEN=$(curl -s -X POST \
  "https://iam.cloud.ibm.com/identity/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${API_KEY}" | \
  grep -o '"access_token":"[^"]*' | cut -d'"' -f4)

if [ -z "$IAM_TOKEN" ]; then
    echo -e "${RED}Error: Failed to get IAM token. Check your API key.${NC}"
    exit 1
fi

# Disable security
echo -e "${YELLOW}Disabling security for embedded chat...${NC}"
echo -e "Orchestration ID: ${ORCHESTRATION_ID}"
echo -e "Instance URL: ${SERVICE_INSTANCE_URL}"

RESPONSE=$(curl -s -w "\n%{http_code}" -X PATCH \
  "${SERVICE_INSTANCE_URL}/api/v1/orchestrations/${ORCHESTRATION_ID}/channels/webchat" \
  -H "Authorization: Bearer ${IAM_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "security": {
      "enabled": false
    }
  }')

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

if [ "$HTTP_CODE" -eq 200 ] || [ "$HTTP_CODE" -eq 201 ]; then
    echo -e "${GREEN}✓ Security disabled successfully!${NC}"
    echo -e "${GREEN}You can now use embedded chat without authentication.${NC}\n"
    echo -e "${YELLOW}Next steps:${NC}"
    echo "1. Refresh your web application"
    echo "2. The embedded chat should now work without 401 errors"
    echo "3. Remember to re-enable security before going to production"
else
    echo -e "${RED}✗ Failed to disable security${NC}"
    echo -e "HTTP Status Code: ${HTTP_CODE}"
    echo -e "Response: ${BODY}\n"
    echo -e "${YELLOW}Troubleshooting:${NC}"
    echo "1. Verify your SERVICE_INSTANCE_URL is correct"
    echo "2. Verify your API_KEY has admin privileges"
    echo "3. Check that the API endpoint exists: ${SERVICE_INSTANCE_URL}/api/v1/channels/webchat/security"
    exit 1
fi

