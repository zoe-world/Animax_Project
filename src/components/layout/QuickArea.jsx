import { Quick } from "../modules/Quick";

export function QuickArea (props){
  // 리턴 코드 ////////
  return (
    <>
      <Quick cat="main" chgPageFn={props.chgPageFn}/>
    </>
  );
}; ////// QuickArea 컴포넌트 ////
