"use client"

import Button from "../Buttons/Button";

export default function JoinUs(){
    return(
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center bg-transparent sm:bg-white rounded-[20px] p-0 sm:p-0 gap-3 sm:gap-0 w-full max-w-md"
          >
            <input
              type="email"
              placeholder="Enter your email here"
              required
              className="w-full px-5 py-4 sm:py-3 text-background bg-white sm:bg-transparent rounded-2xl sm:rounded-none outline-none text-base"
            />
            <div className="w-full sm:w-auto">
              <Button text="Subscribe" />
            </div>
          </form>
    )
}