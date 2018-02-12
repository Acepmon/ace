import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
	selector: 'app-title-bar',
	templateUrl: './title-bar.component.html',
	styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

	public win;

	constructor(private electronService: ElectronService) { }

	ngOnInit() {
		if(this.electronService.isElectronApp) {
			this.win = this.electronService.remote.getCurrentWindow();
		}
	}

	min(){
		this.win.minimize();
	}

	max(){
		if(this.win.isMaximized()){
			this.win.unmaximize();
		} else {
			this.win.maximize();
		}
	}
	
	close(){
		this.win.close();
	}
}