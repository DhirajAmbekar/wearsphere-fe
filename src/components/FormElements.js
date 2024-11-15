import { logDOM } from "@testing-library/react";
import React, { useState } from "react";

export const CustFormSimgleselectWithSearch = ({
  value,
  required,
  option_show,
  options,
  setvalue,
  error,
  inputname,
  label,
  add,
}) => {
  const [search, setsearch] = useState("");

  return (
    <label className="cust_form_multiselect" htmlFor={"focus" + inputname}>
      <div className="title" active={String(value?.length > 0)}>
        {label}

        {required && <div className="required">Required</div>}
      </div>
      {/* <div className="dropdown_selections" error={String(!!error)}> */}
      <div className="dropdown_selections">
        {value ? (
          option_show ? (
            option_show(value)
          ) : (
            value
          )
        ) : (
          <div className="placeholder">Choose {label}</div>
        )}
        <input
          id={"focus" + inputname}
          type="text"
          placeholder="."
          value={search}
          className="hide"
        />
        <div className="dropdown_body">
          <div className="search_main">
            <input
              className="search"
              id={"search" + inputname}
              type="text"
              placeholder={"Search " + label}
              value={search}
              onChange={({ target: { value } }) => setsearch(value)}
              // onKeyDown={({ target, key }) => {
              //   if (key === "Backspace" && target.value == "") {
              //     setvalue(value.slice(-1)[0]);
              //   }
              // }}
            />
          </div>
          {options.map((option) => {
            let is_seleted = value == option.id;
            if (
              option.name.toLowerCase().match(search.toLowerCase()) ||
              !search
            ) {
              return (
                <div
                  key={option.id}
                  value={option.id}
                  onClick={() => setvalue(option.id)}
                  className={is_seleted ? "hidden" : ""}
                >
                  {option.show ? option.show : option.name}
                </div>
              );
            }
          })}
        </div>
      </div>
      {add?.status ? (
        <div
          className="titleadd"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            add.onadd();
          }}
        >
          {add?.txt}
        </div>
      ) : (
        ""
      )}
      {/* <datalist id={"datalist" + inputname}>
        {options
          .filter((el) => el.toLowerCase().includes(search.toLowerCase()))
          .map((option) => (
            <option
              key={option}
              value={option}
              onClick={() => {
                setvalue(option);
                setsearch("");
              }}
            >
            </option>
          ))}
      </datalist> */}
    </label>
  );
};

export const CustFormSkingleselectChips = ({
  value,
  option_show,
  options,
  setvalue,
  error,
  inputname,
  label,
  required,
}) => {
  return (
    <label
      className="cust_form_multiselect"
      error={String(!!error)}
      htmlFor={inputname}
    >
      <input
        id={inputname}
        type="text"
        placeholder="text"
        value={value}
        className="hide"
      />
      <div className="title" active={String(value?.length > 0)}>
        {label}

        {required && <div className="required">Required</div>}
      </div>

      <div className="chips_group">
        {options.map((option) => {
          let is_seleted = value == option.id;
          return (
            <div
              key={option.id}
              value={option.id}
              onClick={() => (is_seleted ? "" : setvalue(option.id))}
              className={is_seleted ? "hidden" : ""}
            >
              {option.name}
            </div>
          );
        })}
      </div>
    </label>
  );
};

// Todo
export const CustFormText = ({
  autocomplete,
  label,
  value,
  setvalue,
  error,
  inputname,
  required,
}) => {
  return (
    <label
      className="cust_form_input"
      error={String(!!error)}
      htmlFor={inputname}
    >
      <div className="title" active={String(value?.length > 0)}>
        {label}

        {required && <div className="required">Required</div>}
      </div>
      <input
        type="text"
        onChange={setvalue}
        value={value}
        id={inputname}
        // name={"datalist" + inputname}
        list={"datalist" + inputname}
        placeholder={`Add ${label}`}
      />
      {autocomplete ? (
        <datalist id={"datalist" + inputname}>
          {autocomplete?.map((item) => (
            <option key={item} value={item} />
          ))}
        </datalist>
      ) : (
        ""
      )}
      {/* {error ? <div className="cust_form_input_error">{error}</div> : ""} */}
    </label>
  );
};
export const CustFormTextView = ({
  autocomplete,
  label,
  value,
  setvalue,
  error,
  inputname,
  required,
}) => {
  return (
    <label
      className="cust_form_input"
      error={String(!!error)}
      htmlFor={inputname}
    >
      <div className="title" active={String(value?.length > 0)}>
        {label}

        {required && <div className="required">Required</div>}
      </div>
      <input
        type="text"
        onChange={setvalue}
        value={value}
        id={inputname}
        readOnly={true}
        style={{ cursor: "unset" }}
        // name={"datalist" + inputname}
        list={"datalist" + inputname}
        placeholder={`Add ${label}`}
      />
      {autocomplete ? (
        <datalist id={"datalist" + inputname}>
          {autocomplete?.map((item) => (
            <option key={item} value={item} />
          ))}
        </datalist>
      ) : (
        ""
      )}
      {/* {error ? <div className="cust_form_input_error">{error}</div> : ""} */}
    </label>
  );
};

export const CustFormImage = ({
  required,
  label,
  value,
  setvalue,
  error,
  inputname,
}) => {
  return (
    <label
      className="cust_form_photo"
      error={String(!!error)}
      htmlFor={inputname}
    >
      <div className="title" active={String(value?.length > 0)}>
        {label}

        {required && <div className="required">Required</div>}
      </div>
      {value?.name ? (
        <div className="display_group">
          <div
            className=" photo"
            style={{ backgroundImage: `url("${value.base64}")` }}
          ></div>
          <div className="txt">{value.name}</div>
          <svg
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setvalue({
                base64: "",
                name: "",
              });
            }}
            className="delete"
            width="10"
            height="10"
            x="0"
            y="0"
            viewBox="0 0 320.591 320.591"
          >
            <g>
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                fill="#000000"
                opacity="1"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                fill="#000000"
                opacity="1"
                data-original="#000000"
              ></path>
            </g>
          </svg>
        </div>
      ) : (
        <div className="display_group">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="icon-import"
            stroke="none"
          >
            <g fill="#6b6b6b">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.25 7.15381C4.25 5.63503 5.48122 4.40381 7 4.40381C8.51878 4.40381 9.75 5.63503 9.75 7.15381C9.75 8.67259 8.51878 9.90381 7 9.90381C5.48122 9.90381 4.25 8.67259 4.25 7.15381ZM7 5.90381C6.30964 5.90381 5.75 6.46345 5.75 7.15381C5.75 7.84416 6.30964 8.40381 7 8.40381C7.69036 8.40381 8.25 7.84416 8.25 7.15381C8.25 6.46345 7.69036 5.90381 7 5.90381Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.25 5.15381C1.25 3.08274 2.92893 1.40381 5 1.40381H19C21.0711 1.40381 22.75 3.08274 22.75 5.15381V19.1538C22.75 21.2249 21.0711 22.9038 19 22.9038H17C16.5858 22.9038 16.25 22.568 16.25 22.1538C16.25 21.7396 16.5858 21.4038 17 21.4038H19C20.2426 21.4038 21.25 20.3965 21.25 19.1538L21.25 17.2347L21.25 17.2337C21.2497 17.1478 21.2102 17.0668 21.1428 17.0135L14.0169 11.3878C13.158 10.7097 11.9356 10.748 11.1208 11.4785L4.15067 17.7276C3.75452 18.0828 3.57716 18.2255 3.44037 18.3356C3.26658 18.4755 3.15826 18.5626 2.75 18.9657V19.1538C2.75 20.3965 3.75736 21.4038 5 21.4038H7C7.41421 21.4038 7.75 21.7396 7.75 22.1538C7.75 22.568 7.41421 22.9038 7 22.9038H5C2.92893 22.9038 1.25 21.2249 1.25 19.1538V5.15381ZM21.25 5.15381V15.187L14.9464 10.2105C13.5148 9.08027 11.4776 9.14407 10.1195 10.3617L3.14935 16.6107C2.98227 16.7605 2.85552 16.8698 2.75 16.9586V5.15381C2.75 3.91117 3.75736 2.90381 5 2.90381H19C20.2426 2.90381 21.25 3.91117 21.25 5.15381Z"
              />
              <path d="M11.4165 13.6538C11.7387 13.3316 12.2611 13.3316 12.5833 13.6538L15.7559 16.8265C16.0781 17.1487 16.0781 17.671 15.7559 17.9932C15.4338 18.3154 14.9114 18.3154 14.5892 17.9932L12.8249 16.2289L12.8249 23.175C12.8249 23.6306 12.4555 24 11.9999 24C11.5443 24 11.1749 23.6306 11.1749 23.175L11.1749 16.2289L9.41059 17.9932C9.08841 18.3154 8.56605 18.3154 8.24386 17.9932C7.92168 17.671 7.92168 17.1487 8.24386 16.8265L11.4165 13.6538Z" />
            </g>
          </svg>
          <span className="placeholder">Choose an image</span>
        </div>
      )}

      <input
        type="file"
        // onChange={setvalue}
        accept="image/*"
        onChange={(e) => {
          if (e.target.files?.length > 0) {
            const file = e.target.files[0];
            const fileName = file.name;

            const reader = new FileReader();
            reader.onloadend = () => {
              setvalue({ base64: reader.result, name: fileName });
              e.target.value = null;
            };
            reader.readAsDataURL(file);
          }
        }}
        id={inputname}
      />
    </label>
  );
};
export const CustFormImageView = ({
  required,
  label,
  value,
  setvalue,
  error,
  inputname,
}) => {
  return (
    <label
      className="cust_form_photo"
      style={{ cursor: "unset" }}
      error={String(!!error)}
      htmlFor={inputname}
    >
      <div className="title" active={String(value?.length > 0)}>
        {label}

        {required && <div className="required">Required</div>}
      </div>

      <div className="display_group">
        <div
          className=" photo"
          style={{ backgroundImage: `url("${value?.base64}")` }}
        ></div>
        <div className="txt">{value?.name}</div>
      </div>
    </label>
  );
};
export const CustFormMultiselect = ({
  value,
  option_show,
  options,
  setvalue,
  error,
  inputname,
  label,
  required,
}) => {
  return (
    <label
      className="cust_form_multiselect"
      error={String(!!error)}
      htmlFor={inputname}
    >
      <div className="title" active={String(value?.length > 0)}>
        {label}

        {required && <div className="required">Required</div>}
      </div>
      <input
        className="hide"
        id={inputname}
        type="text"
        placeholder="text"
        value={value.join(", ")}
      />
      <div className="dropdown_selections">
        {/* {value?.map((el) => (option_show ? option_show(el) : el)).join(", ")} */}

        {value?.length == 0 ? (
          <span className="placeholder">Choose {label}</span>
        ) : value?.length > 1 ? (
          `${value?.length} items`
        ) : option_show ? (
          option_show(value)
        ) : (
          value
        )}
      </div>
      <div className="dropdown_body">
        {options.map((option) => {
          let is_seleted = value.some((el) => el == option.id);
          return (
            <div
              key={option.id}
              value={option.id}
              onClick={() => setvalue(option.id)}
              className={is_seleted ? "hidden" : ""}
            >
              {option.name}
            </div>
          );
        })}
      </div>
    </label>
  );
};
export const CustFormMultiselectWithSearch = ({
  value,
  option_show,
  options,
  setvalue,
  error,
  inputname,
  label,
  required,
}) => {
  const [search, setsearch] = useState("");

  return (
    <label
      className="cust_form_multiselect"
      error={String(!!error)}
      htmlFor={"focus" + inputname}
    >
      <div className="title" active={String(value?.length > 0)}>
        {label}

        {required && <div className="required">Required</div>}
      </div>
      <div className="dropdown_selections f_column ">
        {value?.length == 0 ? (
          <span className="placeholder">Choose {label}</span>
        ) : value?.length > 1 ? (
          `${value?.length} items`
        ) : option_show ? (
          option_show(value)
        ) : (
          value
        )}
        <input
          id={"focus" + inputname}
          type="text"
          placeholder="."
          // value={search}
          className="hide"
        />
        <div className="dropdown_body">
          <div className="search_main">
            <input
              className="search"
              id={"search" + inputname}
              type="text"
              placeholder={"Search " + label}
              value={search}
              onChange={({ target: { value } }) => setsearch(value)}
            />
          </div>
          {options.map((option) => {
            let is_seleted = value.includes(option.id);
            if (
              option.name.toLowerCase().match(search.toLowerCase()) ||
              !search
            ) {
              return (
                <div
                  key={option.id}
                  value={option.id}
                  onClick={() => setvalue(option.id)}
                  className={is_seleted ? "hidden" : ""}
                >
                  {option.show ? option.show : option.name}
                </div>
              );
            }
          })}
        </div>
      </div>
    </label>
  );
};
export const CustFormAddchipsWithInput = ({
  value,
  option_show,
  options,
  setvalue,
  error,
  inputname,
  label,
  required,
}) => {
  const [search, setsearch] = useState("");

  return (
    <label
      className="cust_form_multiselect"
      error={String(!!error)}
      htmlFor={"focus" + inputname}
    >
      <div className="title" active={String(value?.length > 0)}>
        {label}

        {required && <div className="required">Required</div>}
      </div>
      <div className="chips_group" style={{ margin: "0 0 10px 0" }}>
        {value.map((el) => (
          <div>
            {el}
            <div
              onClick={() => {
                setvalue(el, "remove");
              }}
            >
              <svg
                width="10"
                height="10"
                x="0"
                y="0"
                viewBox="0 0 320.591 320.591"
              >
                <g>
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    fill="#000000"
                    opacity="1"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    fill="#000000"
                    opacity="1"
                    data-original="#000000"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className="dropdown_selections f_column ">
        <input
          id={"focus" + inputname}
          type="text"
          placeholder={`Add ${label}`}
          value={search}
          className="txt_input"
          onChange={({ target: { value } }) => {
            setsearch(value);
          }}
          onKeyDown={({ key, target: { value } }) => {
            if (key === "Enter" && value) {
              setvalue(value, "add");
              setsearch("");
            }
          }}
        />
      </div>
    </label>
  );
};
export const CustFormSkingleselect = ({
  value,
  option_show,
  options,
  setvalue,
  error,
  inputname,
  label,
}) => {
  return (
    <label
      className="cust_form_multiselect"
      error={String(!!error)}
      htmlFor={inputname}
    >
      <input
        id={inputname}
        type="text"
        placeholder="text"
        value={value}
        className="hide"
      />
      <div className="dropdown_selections">
        {option_show ? option_show(value) : value}
        <div className="title">{label}</div>
      </div>
      <div className="dropdown_body">
        {options.map((option) => {
          let is_seleted = value == option.id;
          return (
            <div
              key={option.id}
              value={option.id}
              onClick={() => setvalue(option.id)}
              className={is_seleted ? "hidden" : ""}
            >
              {option.name}
            </div>
          );
        })}
      </div>
    </label>
  );
};
