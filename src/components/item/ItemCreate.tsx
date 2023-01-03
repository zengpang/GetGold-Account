import s from './ItemCreate.module.scss';
import { defineComponent, PropType, ref } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { TabPageBar, TabPage } from '../../shared/TabPageBar';

import { Button } from '../../shared/Button';
import {RouterLink} from 'vue-router';
import { ItemList } from '../../shared/ItemList';



export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
    
  },
  
  setup: (props, context) => {

    const refKind = ref('支出');
    const refExpensesTags = ref([
      { id: 1, name: '餐费', sign: '\u{1F471}', category: 'expenses' },
      { id: 2, name: '打车', sign: '\u{1F471}', category: 'expenses' },
      { id: 3, name: '聚餐', sign: '\u{1F471}', category: 'expenses' },
      { id: 4, name: '打车', sign: '\u{1F471}', category: 'expenses' },
      { id: 5, name: '聚餐', sign: '\u{1F471}', category: 'expenses' },
      { id: 6, name: '打车', sign: '\u{1F471}', category: 'expenses' },
      { id: 7, name: '聚餐', sign: '\u{1F471}', category: 'expenses' },
    ])
    const refIncomeTags = ref([
      { id: 4, name: '工资', sign: '\u{1F471}', category: 'income' },
      { id: 5, name: '彩票', sign: '\u{1F471}', category: 'income' },
      { id: 6, name: '滴滴', sign: '\u{1F471}', category: 'income' },
      { id: 11, name: '彩票', sign: '\u{1F471}', category: 'income' },
      { id: 18, name: '滴滴', sign: '\u{1F471}', category: 'income' },
      { id: 17, name: '彩票', sign: '\u{1F471}', category: 'income' },
      { id: 19, name: '滴滴', sign: '\u{1F471}', category: 'income' },
      { id: 4, name: '工资', sign: '\u{1F471}', category: 'income' },
      { id: 5, name: '彩票', sign: '\u{1F471}', category: 'income' },
      { id: 6, name: '滴滴', sign: '\u{1F471}', category: 'income' },
      { id: 11, name: '彩票', sign: '\u{1F471}', category: 'income' },
      { id: 18, name: '滴滴', sign: '\u{1F471}', category: 'income' },
      { id: 17, name: '彩票', sign: '\u{1F471}', category: 'income'},
      { id: 19, name: '滴滴', sign: '\u{1F471}', category: 'income' },
      { id: 4, name: '工资', sign: '\u{1F471}', category: 'income' },
      { id: 5, name: '彩票', sign: '\u{1F471}', category: 'income' },
      { id: 6, name: '滴滴', sign: '\u{1F471}', category: 'income' },
      { id: 11, name: '彩票', sign: '\u{1F471}', category: 'income' },
      { id: 18, name: '滴滴', sign: '\u{1F471}', category: 'income' },
      { id: 17, name: '彩票', sign: '\u{1F471}', category: 'income' },
      { id: 19, name: '滴滴', sign: '\u{1F471}', category: 'income' },
      { id: 4, name: '工资', sign: '\u{1F471}', category: 'income' },
      { id: 5, name: '彩票', sign: '\u{1F471}', category: 'income' },
      { id: 6, name: '滴滴', sign: '\u{1F471}', category: 'income' },
      { id: 11, name: '彩票', sign: '\u{1F471}', category: 'income' },
      { id: 18, name: '滴滴', sign: '\u{1F471}', category: 'income' },
      { id: 17, name: '彩票', sign: '\u{1F471}', category: 'income' },
      { id: 19, name: '滴滴', sign: '\u{1F471}', category: 'income'},
      { id: 4, name: '工资', sign: '\u{1F471}', category: 'income' },
      { id: 5, name: '彩票', sign: '\u{1F471}', category: 'income' },
      { id: 6, name: '滴滴', sign: '\u{1F471}', category: 'income' },
      { id: 11, name: '彩票', sign: '\u{1F471}', category: 'income' },
      { id: 18, name: '滴滴', sign: '\u{1F471}', category: 'income' },
      { id: 17, name: '彩票', sign: '\u{1F471}', category: 'income' },
      { id: 19, name: '滴滴', sign: '\u{1F471}', category: 'income' },
    ])
    console.log("刷新页面");
    
    return () => (
      <MainLayout iconShow={true}>
        {{
          title: () => '记一笔',
          default: () => (
            <div class={s.wrapper}>
              <TabPageBar v-model:selected={refKind.value}>
                <TabPage name='支出' class={s.tabPage} >
                  <a class={s.itemTitle}>支出标签</a>
                  <ItemList  kind="expenses"  ItemType='tag'   class={s.itemList}></ItemList>
                  <RouterLink to={'/tags/create?kind=expenses'} class={s.addTag} ><Button class={s.addTagBtn}>添 加 标 签</Button></RouterLink>
                </TabPage>
                <TabPage name='收入' class={s.tabPage}>
                  <a class={s.itemTitle}>收入标签</a>
                  <ItemList  kind="income" ItemType='tag'  class={s.itemList}></ItemList>
                  <RouterLink to={`/tags/create?kind=income`} class={s.addTag} ><Button class={s.addTagBtn}>添 加 标 签</Button></RouterLink>
                </TabPage>

              </TabPageBar>

            </div>
          )
        }}
      </MainLayout>
    )
  }
})