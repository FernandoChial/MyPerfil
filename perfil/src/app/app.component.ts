import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./components/profile/profile.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ProfileComponent, NavigationComponent]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
