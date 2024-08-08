import { IFlowNodeParameter } from "@/types/flow";
import { Input } from 'antd';
import { uiAtrrtUnderlineToHump } from '@/utils/flow'

const { TextArea } = Input;

type TextAreaProps = {
  data: IFlowNodeParameter;
}

export const RenderTextArea = (params: TextAreaProps) => {
  const { data } = params;
  if(data?.ui?.autosize){
    uiAtrrtUnderlineToHump(data.ui.autosize)
  }

  return (
    <TextArea {...data.ui.attr}  {...data.ui.autosize}  rows={4} />
  ) 
}
