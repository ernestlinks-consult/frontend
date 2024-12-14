"use"
import Image from "next/image";
import { TextField, InputAdornment } from "@mui/material";
import { Message } from "@mui/icons-material";

export default function CreateAccount() {
  return (
    <div className="flex min-h-screen absolute inset-0 bg-gradient-to-b from-white via-[#E8E9FF] to-[#E8E9FF] lg:hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white via-[#E8E9FF] to-[#E8E9FF] lg:hidden" >

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight text-[#0000CC]">
              Create Account
            </h1>
            <p className="text-sm text-gray-600">
              Enter your email below. We'll send you a code to complete your
              sign-up.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              {/* Updated Input Field with Icon */}
              <TextField
                className="w-full"
                id="email"
                placeholder="Email"
                type="email"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Message style={{ color: "#0000CC" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="flex gap-3">
              <button
                className="flex-1 px-4 py-2 bg-white text-blue-900 border border-blue-900 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0000CC]"
              >
                Verify with Phone
              </button>
              <button
                className="flex-1 px-4 py-2 bg-[#050582] text-white rounded-md hover:bg-[#0000AA] focus:outline-none focus:ring-2 focus:ring-[#0000CC]"
              >
                Verify with Email
              </button>
            </div>
            <div className="text-center text-sm">
              <span className="text-gray-600">
                Already have an account?{" "}
              </span>
              <a
                className="text-[#0000CC] hover:underline cursor-pointer"
                href="#"
              >
                Click here!
              </a>
            </div>
            <button
              className="w-full px-4 py-2 bg-[#00005A] text-white rounded-md hover:bg-[#000045] focus:outline-none focus:ring-2 focus:ring-[#00005A]"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block flex-1">
        <div className="relative h-full w-full">
          <Image
            alt="Abstract architectural spiral staircase in blue"
            className="object-cover"
            fill
            src="/images/artifact.png"
          />
        </div>
      </div>
      </div>
    </div>
  );
}
