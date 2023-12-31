import { LocationTypes, LoginInputType, SignUpInput } from '@/types'

export class ApiService {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getPersons(endpoint: string) {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: 'GET',
      });
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  }

   async Users(endpoint: string, payload: SignUpInput|LoginInputType|LocationTypes): Promise<any> {
      const stringType = JSON.stringify(payload)
       console.log(stringType)
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
            });

            return await response.json();
        } catch (err) {
            console.log(err)
        }
    }
}