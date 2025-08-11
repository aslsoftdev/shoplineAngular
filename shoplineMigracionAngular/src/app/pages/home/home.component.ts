
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  private scripts = [
    'assets/js/Btj8gIDAfUbg.js',
    'assets/js/0RYcmtHNzeKD.js',
    'assets/js/BoX8K9uAwsEZ.js',
    'assets/js/iPFiVDlbzn6i.js',
    'assets/js/8eyAMlnnEWX0.js',
    'assets/js/aS5NYHozGJqT.js',
    'assets/js/8eyAMlnnEWX0.js',
    'assets/js/iVNXgkwU9ou3.js',
    'assets/js/S2wkihMsUG7v.js',
    'assets/js/YJMB0jXMbwYM.js',
    'assets/js/VOAGbPBNMqrK.js',
    'assets/js/a3bN4gMpiVhO.js'
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, 
    private route: ActivatedRoute,
    private http: HttpClient) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadScriptsSequentially(0);
    }
  }
    private loadScriptsSequentially(index: number) {
    if (index >= this.scripts.length) return;
    const script = document.createElement('script');
    script.src = this.scripts[index];
    script.onload = () => this.loadScriptsSequentially(index + 1);
    document.body.appendChild(script);
  }
}
