import React, { useState } from "react";
import { Icons } from "./Icons";
import { CustInputText } from "./AllInpputs";

export const AddForm = ({
  type,
  inp_options = [],
  setdata,
  data,
  actions,
  save,
  close,
}) => {
  const [error, seterror] = useState({});
  const [require_inps, setrequire_inps] = useState([])
  return (
    <div className="form_container">
      <div>
        <div className="form_header">
          <div></div>
          <div>{type}</div>
          <div className="close">
            <Icons type={"close"} />
          </div>
        </div>
        <div className="form_body">
          {inp_options.map(
            (el, i) =>
              ({
                text: (
                  <CustInputText
                    key={i}
                    {...{
                      ...el,
                      inputname: el.inpkey,
                      value: data[el.inpkey],
                      setvalue: ({ target: { value } }) => {
                        console.log(value);

                        setdata({ ...data, [el.inpkey]: value });
                      },
                    }}
                  />
                ),
                images: <div key={i}>Images</div>,
              }?.[el.type])
          )}
        </div>
      </div>
    </div>
  );
};
