import React, { useEffect, useState } from "react";
import logo from "./assets/logo-dark.svg";
import copyIcon from "./assets/copy-icon.png";
import { Link } from "react-scroll";
import "./App.css";
import CopyToClipboard from "react-copy-to-clipboard";

export default function API() {
  const [open, setOpen] = useState(false);
  const [currentApi, setApi] = useState(null);

  return (
    <div className='api'>
      <div className='appBar'>
        <img src={logo} width='170' height='55' alt='' />
      </div>
      <div className='container'>
        <div className='sideBar'>
          <div className='netex'>NETEX KASSA API</div>
          <div className='introduction'>
            <Link
              to='E01'
              smooth
              className='sidebarLink'
              style={{ fontWeight: 500 }}
            >
              Introduction
            </Link>
          </div>
          <div className='flexStart'>
            <span className='GET'>GET</span>
            <Link to='E01' smooth className='sidebarLink'>
              Get balance
            </Link>
          </div>
          <div className='flexStart'>
            <span className='GET'>GET</span>
            <Link to='E02' smooth className='sidebarLink'>
              Get available methods
            </Link>
          </div>
          <div className='flexStart'>
            <span className='POST'>POST</span>
            <Link to='E03' smooth className='sidebarLink'>
              Create invoce
            </Link>
          </div>
          <div className='flexStart'>
            <span className='POST'>POST</span>
            <Link to='E04' smooth className='sidebarLink'>
              Get history
            </Link>
          </div>
        </div>
        <div style={{ flex: "1 1 0%", minWidth: 0 }}>
          {dataEndpoints.map((api, index) => (
            <section className='section' id={api.id} key={api.id}>
              <div style={{ width: "50%" }}>
                {index === 0 && (
                  <div className='sectionWrapper'>
                    <div className='title'>Netex Kassa API</div>
                  </div>
                )}
                <div className='sectionWrapper' key={api.title}>
                  <div className='flexStart'>
                    <span
                      className={api.type === "GET" ? "GET" : "POST"}
                      style={{ fontSize: "16px" }}
                    >
                      {api.type}
                    </span>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#212121",
                        marginLeft: "10px",
                      }}
                    >
                      {api.title}
                    </p>
                  </div>
                  <div className='apiURL'>{api.endpoint}</div>
                  <p className='headers'>HEADERS</p>
                  {api.headers.map((header) => (
                    <div className='raw' key={header.name}>
                      <div className='header'>{header.name}</div>
                      <div className='headerValue'>
                        <div>{header.value}</div>
                      </div>
                    </div>
                  ))}
                  {api.type === "POST" && (
                    <>
                      <p className='headers'>
                        BODY{" "}
                        <span style={{ fontWeight: 400, color: "#666666" }}>
                          urlencoded
                        </span>
                      </p>
                      {api.body.map((item) => (
                        <div className='raw' key={item.name}>
                          <div className='header'>{item.name}</div>
                          <div className='headerValue'>
                            <div>{item.value}</div>
                            {item.optional && (
                              <span style={{ fontSize: "12px", color: "grey" }}>
                                OPTIONAL
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
              <div style={{ width: "50%" }}>
                {index === 0 && <div style={{ height: "194px" }}></div>}
                <div className='exampleWrapper'>
                  <div>
                    <div style={{ boxSizing: "border-box" }}>
                      <div style={{ display: "flex", padding: "8px 0px" }}>
                        <div className='exampleRequest'>Example Request</div>
                        <div className='exampleTitle'>{api.title}</div>
                      </div>
                      <div style={{ position: "relative" }}>
                        <div className='exampleCodeWrapper'>
                          {api.type === "POST" && (
                            <div
                              className='viewMore'
                              onClick={() => {
                                setApi(api);
                                setOpen(true);
                              }}
                            >
                              <div>View More</div>
                            </div>
                          )}
                          <CopyIcon api={api} />
                          <div style={{ maxHeight: "200px", height: "100%" }}>
                            <div style={{ height: "100%" }}>
                              <pre
                                className='pre'
                                style={{
                                  overflow:
                                    api.type === "GET"
                                      ? "auto hidden"
                                      : "hidden",
                                }}
                              >
                                <code className='code'>
                                  curl --location --request{" "}
                                  <span className='constant'>{api.type}</span>{" "}
                                  <span className='string'>
                                    "{api.endpoint}"
                                  </span>{" "}
                                  \<br />
                                  {api.headers.map((header) => (
                                    <span key={header.name}>
                                      --header{" "}
                                      <span className='string'>
                                        '{header.name}:{" "}
                                        {header.value.split(/[\s,]+/).join(" ")}
                                        '
                                      </span>{" "}
                                      \<br />
                                    </span>
                                  ))}
                                  {api.type === "POST" &&
                                    api.body.map((item) => (
                                      <span key={item.name}>
                                        --data-urlencode{" "}
                                        <span className='string'>
                                          '{item.name}={item.value}'
                                        </span>{" "}
                                        \<br />
                                      </span>
                                    ))}
                                </code>
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <section
        className='modalWindow'
        style={{
          visibility: open ? "visible" : "hidden",
          opacity: open ? 1 : 0,
        }}
      >
        <div className='modalWrapper'>
          {open && (
            <div style={{ boxSizing: "border-box" }}>
              <div className='modalHeader'>
                <div className='exampleRequest'>Example Request</div>
                <div className='closeModal' onClick={() => setOpen(false)}>
                  ??
                </div>
              </div>
              <div className='modalCodeWrapper'>
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <div
                    className='exampleCodeWrapper'
                    style={{ maxHeight: "100%" }}
                  >
                    <div style={{ height: "100%" }}>
                      <pre
                        className='pre'
                        style={{
                          overflow:
                            currentApi.type === "GET"
                              ? "auto hidden"
                              : "hidden",
                        }}
                      >
                        <code className='code'>
                          curl --location --request{" "}
                          <span className='constant'>{currentApi.type}</span>{" "}
                          <span className='string'>
                            "{currentApi.endpoint}"
                          </span>{" "}
                          \
                          <br />
                          {currentApi.headers.map((header) => (
                            <span key={header.name}>
                              --header{" "}
                              <span className='string'>
                                '{header.name}:{" "}
                                {header.value.split(/[\s,]+/).join(" ")}'
                              </span>{" "}
                              \<br />
                            </span>
                          ))}
                          {currentApi.type === "POST" &&
                            currentApi.body.map((item) => (
                              <span key={item.name}>
                                --data-urlencode{" "}
                                <span className='string'>
                                  '{item.name}={item.value}'
                                </span>{" "}
                                \<br />
                              </span>
                            ))}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

const CopyIcon = ({ api }) => {
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState(
    `curl --location --request ${api.type} "${api.endpoint}"`
  );

  useEffect(() => {
    api.headers.forEach((header) =>
      setText((text) =>
        text.concat(
          ` --header ${header.name} ${header.value.split(/[\s,]+/).join(" ")}`
        )
      )
    );
    if (api.type === "POST") {
      api.body.forEach((body) =>
        setText((text) =>
          text.concat(` --data-urlencode ${body.name}=${body.value}`)
        )
      );
    }
  }, [api]);
  return (
    <CopyToClipboard
      text={text}
      onCopy={() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
    >
      <div
        className='copyIcon'
        style={{ backgroundColor: copied ? "#00ff08" : "#464646" }}
      >
        <img width='16px' height='16px' src={copyIcon} alt='' />
      </div>
    </CopyToClipboard>
  );
};

const dataEndpoints = [
  {
    id: "E01",
    type: "GET",
    title: "Get balance",
    endpoint: "https://api.netex-kassa.com/api/v1.0/{{merchant_id}}/balance",
    headers: [
      {
        name: "Authorization",
        value: `Bearer {{token}}`,
      },
    ],
  },
  {
    id: "E02",
    type: "GET",
    title: "Get available methods",
    endpoint:
      "https://api.netex-kassa.com/api/v1.0/{{merchant_id}}/available-methods",
    headers: [
      {
        name: "Authorization",
        value: `Bearer {{token}}`,
      },
    ],
  },
  {
    id: "E03",
    type: "POST",
    title: "Create invoce",
    endpoint: "https://api.netex-kassa.com/api/v1.0/{{merchant_id}}/invoice",
    headers: [
      {
        name: "Authorization",
        value: `Bearer {{token}}`,
      },
    ],
    body: [
      { name: "symbol", value: "USD-LTC" },
      { name: "amount", value: "150.00" },
      { name: "order_id", value: "12345678" },
      {
        name: "description",
        value: "Buying a product from an online store",
        optional: true,
      },
      {
        name: "success_url",
        value: "https://example.com/success",
        optional: true,
      },
      { name: "fail_url", value: "https://example.com/fail", optional: true },
      {
        name: "status_url",
        value: "https://example.com/status",
        optional: true,
      },
      { name: "payeer_name", value: "John Smith", optional: true },
      { name: "payeer_email", value: "john@example.com", optional: true },
      { name: "payeer_phone", value: "+16011234567", optional: true },
      {
        name: "payeer_address",
        value: "Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522",
        optional: true,
      },
      {
        name: "sign",
        value:
          "1b9f914519a16dbcada42b6e1fae0e9d432aba80de945587ea44533b5b8d541ds",
      },
    ],
  },
  {
    id: "E04",
    type: "POST",
    title: "Get history",
    endpoint: "https://api.netex-kassa.com/api/v1.0/{{merchant_id}}/history",
    headers: [
      {
        name: "Authorization",
        value: `Bearer {{token}}`,
      },
    ],
    body: [
      { name: "since", value: "1624825852", optional: true },
      { name: "until", value: "1624826200", optional: true },
      { name: "limit", value: "1", optional: true },
      {
        name: "currency",
        value: "USD",
        optional: true,
      },
    ],
  },
];
