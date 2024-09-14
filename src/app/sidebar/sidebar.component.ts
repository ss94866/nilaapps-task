import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { sidebar } from '../../interfaces/sidebar';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, NgClass, TooltipModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarList: sidebar[] = [
    {name: "Dashboard", icon: "/assets/dashboard.svg", isActive: false},
    {name: "Report", icon: "/assets/report.svg", isActive: true}
  ];
}
