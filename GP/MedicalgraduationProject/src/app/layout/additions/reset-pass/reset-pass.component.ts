import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-pass',
  standalone: true,
  imports: [],
  templateUrl: './reset-pass.component.html',
  styleUrl: './reset-pass.component.css'
})
export class ResetPassComponent  {
  
    // private inputs: HTMLElement | null;

    // constructor() {
    //     this.inputs = document.getElementById("inputs");
    //     if (this.inputs) {
    //         this.initEvents();
    //     }
    // }

    // private initEvents(): void {
    //     this.inputs!.addEventListener("input", (e: Event) => {
    //         const target = e.target as HTMLInputElement;
    //         const val = target.value;

    //         if (isNaN(Number(val))) {
    //             target.value = "";
    //             return;
    //         }

    //         if (val !== "") {
    //             const next = target.nextElementSibling as HTMLInputElement | null;
    //             if (next && next.focus) {
    //                 next.focus();
    //             }
    //         }
    //     });

    //     this.inputs!.addEventListener("keyup", (e: KeyboardEvent) => {
    //         const target = e.target as HTMLInputElement;
    //         const key = e.key.toLowerCase();

    //         if (key === "backspace" || key === "delete") {
    //             target.value = "";
    //             const prev = target.previousElementSibling as HTMLInputElement | null;
    //             if (prev && prev.focus) {
    //                 prev.focus();
    //             }
    //         }
    //     });
    // }
}


 
