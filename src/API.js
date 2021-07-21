import React from "react";
import logo from "assets/logo-dark.svg";
import { Link } from "react-scroll";

export default function API() {
  return (
    <div className='api'>
      <AppBar elevation={3} style={{ backgroundColor: "#fff" }}>
        <Toolbar style={{ paddingTop: "16px", marginBottom: "16px" }}>
          <img src={logo} width='170' height='55' alt='' />
        </Toolbar>
      </AppBar>
      <Grid container spacing={0} className={classes.container}>
        <Grid item xs={2} className={classes.sideBar}>
          <div className={classes.netex}>NETEX KASSA API</div>
          <div className={classes.introduction}>
            <Link to='E01' smooth className={classes.sidebarLink}>
              Introduction
            </Link>
          </div>
          <div className={classes.flexStart}>
            <span className={classes.GET}>GET</span>
            <Link to='E01' smooth className={classes.sidebarLink}>
              Get balance
            </Link>
          </div>
          <div className={classes.flexStart}>
            <span className={classes.GET}>GET</span>
            <Link to='E02' smooth className={classes.sidebarLink}>
              Get available methods
            </Link>
          </div>
          <div className={classes.flexStart}>
            <span className={classes.POST}>POST</span>
            <Link to='E03' smooth className={classes.sidebarLink}>
              Create invoce
            </Link>
          </div>
          <div className={classes.flexStart}>
            <span className={classes.POST}>POST</span>
            <Link to='E04' smooth className={classes.sidebarLink}>
              Get history
            </Link>
          </div>
        </Grid>
        <Grid item xs={10}>
          {dataEndpoints.map((api, index) => (
            <section className={classes.section} id={api.id}>
              <div style={{ width: "50%" }}>
                {index === 0 && (
                  <div className={classes.sectionWrapper}>
                    <p className={classes.title}>Netex Kassa API</p>
                  </div>
                )}
                <div className={classes.sectionWrapper} key={api.title}>
                  <div className={classes.flexStart}>
                    <span
                      className={
                        api.type === "GET" ? classes.GET : classes.POST
                      }
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
                  <div className={classes.apiURL}>{api.endpoint}</div>
                  <p className={classes.headers}>HEADERS</p>
                  {api.headers.map((header) => (
                    <div className={classes.raw} key={header.name}>
                      <div className={classes.header}>{header.name}</div>
                      <div className={classes.headerValue}>
                        <div>{header.value}</div>
                      </div>
                    </div>
                  ))}
                  {api.type === "POST" && (
                    <>
                      <p className={classes.headers}>
                        BODY{" "}
                        <span style={{ fontWeight: 400, color: "#666666" }}>
                          urlencoded
                        </span>
                      </p>
                      {api.body.map((item) => (
                        <div className={classes.raw} key={item.name}>
                          <div className={classes.header}>{item.name}</div>
                          <div className={classes.headerValue}>
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
                <div className={classes.exampleWrapper}>
                  <div>
                    <div style={{ boxSizing: "border-box" }}>
                      <div style={{ display: "flex", padding: "8px 0px" }}>
                        <div className={classes.exampleRequest}>
                          Example Request
                        </div>
                        <div className={classes.exampleTitle}>{api.title}</div>
                      </div>
                      <div style={{ position: "relative" }}>
                        <div className={classes.exampleCodeWrapper}>
                          {api.type === "POST" && (
                            <div className={classes.viewMore}>
                              <div>View More</div>
                            </div>
                          )}
                          <div style={{ maxHeight: "200px", height: "100%" }}>
                            <div style={{ height: "100%" }}>
                              <pre
                                className={classes.pre}
                                style={{
                                  overflow:
                                    api.type === "GET"
                                      ? "auto hidden"
                                      : "hidden",
                                }}
                              >
                                <code className={classes.code}>
                                  curl --location --request{" "}
                                  <span className={classes.constant}>
                                    {api.type}
                                  </span>{" "}
                                  <span className={classes.string}>
                                    "{api.endpoint}"
                                  </span>{" "}
                                  \<br />
                                  {api.headers.map((header) => (
                                    <>
                                      --header{" "}
                                      <span className={classes.string}>
                                        '{header.name}:{" "}
                                        {header.value.split(/[\s,]+/).join(" ")}
                                        '
                                      </span>{" "}
                                      \<br />
                                    </>
                                  ))}
                                  {api.type === "POST" &&
                                    api.body.map((item) => (
                                      <>
                                        --data-urlencode{" "}
                                        <span className={classes.string}>
                                          '{item.name}={item.value}'
                                        </span>{" "}
                                        \<br />
                                      </>
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
        </Grid>
      </Grid>
    </div>
  );
}

const dataEndpoints = [
  {
    id: "E01",
    type: "GET",
    title: "Get balance",
    endpoint: "https://api.netex-kassa.com/api/v1.0/8282670/balance",
    headers: [
      {
        name: "Authorization",
        value: `Bearer
                VlptYWpEV2NTRHhvWVJXWDhRUXdUQXN0MmQxV0tUNjBqN3Z4SWdhek10RnlFcnBJVVRSeFoyb2pWZGtUUEZRRg==`,
      },
    ],
  },
  {
    id: "E02",
    type: "GET",
    title: "Get available methods",
    endpoint: "https://api.netex-kassa.com/api/v1.0/8282670/available-methods",
    headers: [
      {
        name: "Authorization",
        value: `Bearer
                VlptYWpEV2NTRHhvWVJXWDhRUXdUQXN0MmQxV0tUNjBqN3Z4SWdhek10RnlFcnBJVVRSeFoyb2pWZGtUUEZRRg==`,
      },
    ],
  },
  {
    id: "E03",
    type: "POST",
    title: "Create invoce",
    endpoint: "https://api.netex-kassa.com/api/v1.0/8282670/invoice",
    headers: [
      {
        name: "Authorization",
        value: `Bearer
                VlptYWpEV2NTRHhvWVJXWDhRUXdUQXN0MmQxV0tUNjBqN3Z4SWdhek10RnlFcnBJVVRSeFoyb2pWZGtUUEZRRg==`,
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
    endpoint: "https://api.netex-kassa.com/api/v1.0/8282670/history",
    headers: [
      {
        name: "Authorization",
        value: `Bearer
                VlptYWpEV2NTRHhvWVJXWDhRUXdUQXN0MmQxV0tUNjBqN3Z4SWdhek10RnlFcnBJVVRSeFoyb2pWZGtUUEZRRg==`,
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
