import { EmailValidator } from "@angular/forms";

export interface datamodel{
    id: number;
      name: string;
      dob: Date;
      gen: string;
      sper: number;
      pper: number;
      cname: string;
      no: number
      email: EmailValidator;
      date: Date;
}