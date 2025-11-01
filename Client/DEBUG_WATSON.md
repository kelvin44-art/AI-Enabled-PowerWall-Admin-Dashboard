# Debugging Watson Orchestrate Chatbot

## Steps to Debug

1. **Open Browser Console** (F12 or Right-click → Inspect → Console tab)

2. **Check Initialization Logs**
   - Look for logs starting with emojis (✅, ❌, ⚠️, 📥)
   - Verify these messages appear:
     - `📥 Loading Watson Orchestrate script from: ...`
     - `✅ Watson Orchestrate script loaded successfully`
     - `✅ Calling wxoLoader.init()...`

3. **Check Network Tab**
   - Go to Network tab (F12 → Network)
   - Refresh the page
   - Filter by "wxo" or "watson"
   - Look for:
     - `wxoLoader.js` - Should load with status 200
     - Any failed requests (red status codes)
     - CORS errors (blocked requests)

4. **Check for Errors**
   - Look for red error messages in console
   - Common issues:
     - **CORS errors**: Cross-origin requests blocked
     - **404 errors**: Script URL not found
     - **403 errors**: Access denied
     - **Network errors**: Cannot reach Watson servers

5. **Check Configuration**
   - In console, type: `window.wxOConfiguration`
   - Verify all fields are present:
     - `orchestrationID`
     - `hostURL`
     - `rootElementID`
     - `chatOptions.agentId`
     - `chatOptions.agentEnvironmentId`

6. **Check wxoLoader**
   - In console, type: `window.wxoLoader`
   - Should show an object with `init` function
   - If `undefined`, the script didn't load properly

7. **Check Chat Button**
   - Look in console for: `Chat button found: ...`
   - If not found, Watson may not be initializing correctly

## Common Issues & Solutions

### Script fails to load
- **Symptom**: Error loading Watson Orchestrate script
- **Solution**: Check network connectivity, firewall, or CORS settings

### wxoLoader is undefined
- **Symptom**: `wxoLoader is not defined after script load`
- **Solution**: Script loaded but didn't expose wxoLoader (check script version/URL)

### Chat button doesn't appear
- **Symptom**: No chat button visible after 5+ seconds
- **Solution**: Check if `wxoLoader.init()` was called successfully

### Chat stuck on loading
- **Symptom**: Chat opens but shows loading spinner forever
- **Solution**: 
  - Check Network tab for API calls to Watson
  - Verify Agent ID and Environment ID are correct
  - Check for authentication/authorization errors

## What to Report

When asking for help, provide:
1. All console logs (copy/paste)
2. Network tab screenshots (filtered by "watson" or "wxo")
3. Any error messages
4. Browser and version
5. Whether the script URL loads when accessed directly

