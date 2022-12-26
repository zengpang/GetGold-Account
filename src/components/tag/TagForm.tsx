import { defineComponent, PropType, reactive, toRaw } from 'vue';
import { Button } from '../../shared/Button';
import { EmojiSelect } from '../../shared/EmojiSelect';
import {Form, FormItem } from '../../shared/Form';
import { Rules,validate } from '../../shared/validate';
import { useRoute, useRouter } from 'vue-router'
import { Dialog } from 'vant'
import s from './Tag.module.scss';
export const TagForm=defineComponent({
   props:{
     name:{
      type:String as PropType<string>
     },
     isShowDeBtn:{
      type:Boolean as PropType<boolean>,
      default:false
     }
   },
   setup:(props,context)=>{
     const formData=reactive({
      name: '',
      sign: '',
     });
     const errors=reactive<{[k in keyof typeof formData]?:string[]}>({})
     const onSubmit=(e:Event)=>{
      const rules: Rules<typeof formData> = [
         { key: 'name', type: 'required', message: '必填' },
         { key: 'name', type: 'pattern', regex: /^.{1,4}$/, message: '只能填 1 到 4 个字符' },
         { key: 'sign', type: 'required', message: '必填' },
       ]
       Object.assign(errors,{
         name:undefined,
         sign:undefined
       })
       Object.assign(errors,validate(formData,rules));
       e.preventDefault();
     }
     const router = useRouter();
     const onDelete = async (options?: { withItems?: boolean }) => {
      await Dialog.confirm({
        title: '确认',
        message: '你真的要删除吗？',
      })
     
      router.back()
    }
     return ()=>(
        <Form onSubmit={onSubmit} >
           <FormItem label='标签名'
              type="text"
              v-model={formData.name}
              error={errors['name']?.[0]}
              class={s.tagTitle}
              />
           <FormItem label={'符号 ' + formData.sign}
          type="emojiSelect" v-model={formData.sign}
          error={errors['sign']?.[0]}
          class={s.tagSelect} 
          />
          <FormItem>
          <p class={s.tips}>长按标签进行编辑</p> 
          </FormItem>
         
            <FormItem class={s.buttondiv}>
                <Button type="submit" class={[s.button]}>确定</Button>
                <Button onClick={() => onDelete({ withItems: true })} class={[s.button,props.isShowDeBtn?'':s.hiddenBtn]}>删除标签</Button> 
            </FormItem>
        </Form>
     )
   } 
})