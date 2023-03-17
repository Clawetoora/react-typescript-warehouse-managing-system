import React from "react";

const useEffectOnlyOnce = (
  callback: any,
  dependencies: any,
  condition: any
) => {
  const calledOnce = React.useRef(false);

  React.useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    if (condition(dependencies)) {
      callback(dependencies);

      calledOnce.current = true;
    }
  }, [callback, condition, dependencies]);
};

export default useEffectOnlyOnce;
