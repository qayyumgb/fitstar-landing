import { Pipe, PipeTransform } from '@angular/core';
import { TabsItemsList } from '../constants/dropdown-list';
import { ActiveRoleEnum } from '../enum/profile.enum';
import { ITabsItems } from '../interfaces/profile.interface';

@Pipe({
  name: 'tabFilter', pure: true,
})
export class TabFilterPipe implements PipeTransform {
  private tabsItems = TabsItemsList;
  transform(value: ITabsItems[], activeRole?: string): ITabsItems[] {
    if (activeRole === ActiveRoleEnum.Modal) {
      let index = value.findIndex(x => x.name === 'Portfolio');
      value.splice(index, 1)
    }
    else {
      value = this.tabsItems;
    }
    return value;

  }

}
