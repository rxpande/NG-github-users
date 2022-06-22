import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  apiURL = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  // Get all users
  getAllUsers() {
    return this.http.get(`${this.apiURL}?/per_page=10`);
  }

  // Get single user
  getSingleUser(username: string) {
    return this.http.get(`${this.apiURL}/${username}`);
  }
}
