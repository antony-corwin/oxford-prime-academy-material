import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Path } from "@core/structs";

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubNavComponent implements OnInit {
  path = Path;

  @Input() navItems: any;

  constructor() {}

  ngOnInit(): void {}

}
