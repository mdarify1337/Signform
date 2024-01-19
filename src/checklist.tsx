import "./index.css";
import "./list.css";

import bgm from "./Leonardo_Diffusion_XL_images_display_a_man_wears_a_jacket_and_0.jpg";

import React from "react";
import { Button, Label, TextInput, Select } from "flowbite-react";

const YourForm: React.FC = () => {
  return (
    <form className="flex max-w-md flex-col gap-4">
      
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Select your Gender" />
      </div>
      <Select id="countries" required>
        <option>Male</option>
        <option>Female</option>
      </Select>
    </div>
      <Button   type="submit">Submit</Button>
    </form>
  );
};

function ValidAccount() {
  return (
    <section className="cont">
      <div className="container2">
        <div className="list1">
          
          <div className="form login">
            <div className="form-content">
                <YourForm></YourForm>
            </div>
          </div>
        </div>
        <div className="list2">
          <div
            style={{ backgroundImage: `url(${bgm})`, width: `435px` }}
            className="form2"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default ValidAccount;
