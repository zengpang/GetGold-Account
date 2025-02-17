import s from './Item.module.scss';
import { defineComponent, PropType } from 'vue';
import { Money } from './Money';
import { Datetime } from './Datetime';

export const Item = defineComponent({
    props: {
      
        tagName: {
            type: String as PropType<string>,
            required: true
        },
        tagIcon: {
            type: String as PropType<string>,
            required: true
        },
        tagTime: {
            type: String as PropType<string>,
            required: true
        },
        tagPrice: {
            type: Number as PropType<number>,
            required: true
        },
        tagKind:{
            type: String as PropType<string>,
            required: true
        }
    },
    setup: (props, context) => {
        return () => {
            const isincome=(props.tagKind !== "expenses");
            return <div class={s.item }  >
                <div class={s.sign}>
                    <span>{props.tagIcon}</span>
                </div>
                <div class={s.text}>
                    <div class={s.tagAndTime}>
                        <span class={s.tag}>{props.tagName}</span>
                        <Datetime class={s.time} value={props.tagTime} />
                        
                    </div>
                    <div class={s.price}>
                 
                       <span class={[s.amount,isincome?s.income:'']}>{(isincome?"+￥":"-￥")}<Money value={props.tagPrice}></Money></span>
                    </div>
                </div>
            </div>
        }
            ;
    }
})
