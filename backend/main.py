from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from webauthn import verify_registration_response, verify_authentication_response

app = FastAPI()

class WebAuthnRegistration(BaseModel):
    id: str
    rawId: str
    type: str
    response: dict

class WebAuthnAuthentication(BaseModel):
    id: str
    rawId: str
    type: str
    response: dict

@app.post("/register")
async def register(webauthn_data: WebAuthnRegistration):
    try:
        verified = verify_registration_response(webauthn_data.dict(), expected_origin="https://yourapp.com")
        # Save the credential in the database
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    return {"status": "ok"}

@app.post("/authenticate")
async def authenticate(webauthn_data: WebAuthnAuthentication):
    try:
        verified = verify_authentication_response(webauthn_data.dict(), expected_origin="https://yourapp.com")
        # Validate the user and issue JWT or session
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    return {"status": "ok"}
