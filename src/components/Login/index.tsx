import React, { ChangeEvent, FormEvent, useState } from "react";

import { ContentHeading } from "../ContentHeading";
import { Input } from "../Input";

type FormDataProps = {
  username: string;
  password: string;
  rememberMe: boolean;
};

const Login = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "400px" }}>
        <ContentHeading>
          <h2>Sign In</h2>
        </ContentHeading>
        <form
          onSubmit={handleSubmit}
          data-testid="form"
          style={{ position: "relative", width: "100%" }}
        >
          <Input
            label="Username"
            type="text"
            aria-label="username"
            placeholder="username"
            id="name"
            name="username"
            value={formData.username}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, ...{ username: event.target.value } })
            }
          />
          <Input
            label="Password"
            type="password"
            placeholder="password"
            aria-label="password"
            value={formData.password}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, ...{ password: event.target.value } })
            }
          />
          <input
            type="checkbox"
            checked={formData.rememberMe}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFormData({
                ...formData,
                ...{ rememberMe: event.target.checked },
              })
            }
          />
          <button
            type="submit"
            disabled={!formData.username || !formData.password}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export { Login };
