(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [186],
  {
    496: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => l });
      var i = a(95155),
        s = a(66766),
        n = a(12115);
      let r = [
        { key: "individuals", label: "For Individuals" },
        { key: "businesses", label: "For Businesses" },
        { key: "depin", label: "DePIN" },
      ];
      function l() {
        let [e, t] = (0, n.useState)("individuals"),
          a = {
            individuals: (0, n.useRef)(null),
            businesses: (0, n.useRef)(null),
            depin: (0, n.useRef)(null),
          },
          l = {
            individuals: {
              description:
                "Built for independent traders, analysts, and curious builders who want an edge without hiring a data-science team.",
              features: [
                {
                  title: "Build Your Private Data Vault",
                  description:
                    "Connect wallets, exchanges, RSS feeds, and social sentiment streams into a single encrypted vault that only you can access. Drag-and-drop widgets let you build dashboards in minutes.",
                  image: (0, i.jsx)(s.default, {
                    src: "/images/predictive-ai/vault-logo.png",
                    alt: "Vault",
                    width: 104,
                    height: 97,
                  }),
                },
                {
                  title: "Train Your Own AI",
                  description:
                    "Spin up a personal Prediction Agent with just a few clicks. Select indicators, set risk thresholds, and back-test on years of historical data. GPU time is auto-allocated in the cloud, so you get model outputs fast - perfect for daily trading or long-term portfolio shifts.",
                  image: (0, i.jsx)(s.default, {
                    src: "/images/predictive-ai/ai-box-logo.png",
                    alt: "AI Box",
                    width: 120,
                    height: 97,
                  }),
                },
                {
                  title: "Monetize Your Edge",
                  description:
                    "Optionally publish your signals to others and earn $OZ each time someone subscribes. Keep your raw data private while turning insights into passive income.",
                  image: (0, i.jsx)(s.default, {
                    src: "/images/predictive-ai/connectors-logo.png",
                    alt: "Connectors",
                    width: 118,
                    height: 97,
                  }),
                },
              ],
            },
            businesses: {
              description:
                "Designed for trading desks, hedge funds, and fintech platforms that need enterprise-grade AI, compliance, and collaboration.",
              features: [
                {
                  title: "Secure Enterprise Data Lake",
                  description:
                    "Ingest proprietary databases, CRM feeds, and market data directly into a permissioned data lake. All records are encrypted and meet SOC 2 & GDPR standards.",
                  image: (0, i.jsx)(s.default, {
                    src: "/images/predictive-ai/lock-image.png",
                    alt: "Lock",
                    width: 77,
                    height: 97,
                  }),
                },
                {
                  title: "Build Custom AI Agents at Scale",
                  description:
                    "Deploy multiple Prediction Agents with dedicated GPU clusters and REST/WebSocket endpoints. Integrate outputs into existing OMS, EMS, or risk engines via our SDK and low-latency APIs.",
                  image: (0, i.jsx)(s.default, {
                    src: "/images/predictive-ai/ai-image.png",
                    alt: "AI",
                    width: 97,
                    height: 97,
                  }),
                },
                {
                  title: "Turn Insights into Revenue",
                  description:
                    "License white-label dashboards to clients, embed real-time signals into your products, or resell curated data streams - all tracked and settled in $OZ.",
                  image: (0, i.jsx)(s.default, {
                    src: "/images/predictive-ai/wallet-image.png",
                    alt: "Wallet",
                    width: 114,
                    height: 97,
                  }),
                },
              ],
            },
            depin: {
              description:
                "Ozak’s Decentralized Physical Infrastructure Network (DePIN) gathers, verifies, and streams high-quality data from thousands of independent nodes - no single point of failure, no vendor lock-in.",
              features: [
                {
                  title: "Distributed Data Sourcing",
                  description:
                    "Sensor hubs, exchange oracles, and IoT edge devices publish raw feeds straight to the Ozak Stream Network (OSN). Redundant routing across multiple geographies keeps data flowing even if individual nodes drop offline.",
                  image: (0, i.jsx)(s.default, {
                    src: "/images/predictive-ai/data-source-image.png",
                    alt: "Data Source",
                    width: 140,
                    height: 97,
                  }),
                },
                {
                  title: "On-Chain Validation & Aggregation",
                  description:
                    "Each data packet is signed, time-stamped, and cross-checked by independent validators before hitting smart-contract storage. This trust-minimized pipeline guarantees tamper-proof inputs for forecasting models and on-chain analytics.",
                  image: (0, i.jsx)(s.default, {
                    src: "/images/predictive-ai/data-image.png",
                    alt: "Data",
                    width: 129,
                    height: 97,
                  }),
                },
                {
                  title: "Edge-Ready Integration",
                  description:
                    "Real-time APIs and WebSockets push validated streams directly to Prediction Agents, enterprise dashboards, or embedded IoT devices - unlocking split-second reactions for trading algorithms, supply-chain sensors, and DeFi protocols.",
                  image: (0, i.jsx)(s.default, {
                    src: "/images/predictive-ai/atom-image.png",
                    alt: "Atom",
                    width: 115,
                    height: 110,
                  }),
                },
              ],
            },
          };
        return (0, i.jsx)("div", {
          id: "individuals",
          className:
            "container mx-auto bg-[#000000] my-[30px] md:pt-[120px] md:mb-[60px] px-4 md:px-6 lg:px-[50px] xl:px-[100px]",
          children: (0, i.jsxs)("div", {
            children: [
              (0, i.jsxs)("div", {
                className: "",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "mx-auto flex flex-col items-center lg:items-start text-center lg:text-left",
                    children: (0, i.jsxs)("div", {
                      className:
                        "flex flex-col md:flex-row items-start justify-between w-full gap-3 md:gap-4 mb-[36px]",
                      children: [
                        (0, i.jsx)("div", {
                          className: "text-center md:text-left w-full md:w-fit",
                          children: (0, i.jsxs)("h2", {
                            className:
                              "text-wrap text-[32px] lg:text-[46px] font-semibold leading-[1.2] tracking-[-0.48px] md:tracking-[-0.64px] lg:tracking-[-0.92px] text-white",
                            children: [
                              "Fast & Scalable",
                              (0, i.jsx)("br", {}),
                              " Infrastructure",
                            ],
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "lg:text-right flex items-start",
                          children: (0, i.jsx)("p", {
                            className:
                              "text-[#AFAFAF] text-[14px] lg:text-[17px] xl:text-[18px] md:leading-[28px] tracking-[-0.28px] md:tracking-[-0.44px] md:max-w-[361px] xl:max-w-[461px]",
                            children:
                              "Designed for trading desks, hedge funds, and fintech platforms that need enterprise-grade AI, compliance, and collaboration.",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "flex gap-3 md:gap-6 mb-[24px] md:mb-[36px]",
                    children: r.map((s) =>
                      (0, i.jsx)(
                        "a",
                        {
                          href: "#".concat(s.key),
                          onClick: (e) => {
                            var i, n;
                            e.preventDefault(),
                              t(s.key),
                              null == (n = a[s.key]) ||
                                null == (i = n.current) ||
                                i.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                          },
                          className:
                            "p-3 md:px-6 md:py-3 text-[#A6FF00] text-nowrap cursor-pointer rounded-[10px] text-[12px] md:text-[18px] md:leading-[24px] tracking-[-0.24px] md:tracking-[-0.36px] transition-all duration-300 ".concat(
                              e === s.key
                                ? "gradient-tab font-semibold"
                                : "font-medium"
                            ),
                          children: s.label,
                        },
                        s.key
                      )
                    ),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                id: "infrastructure-tabs",
                className: "relative",
                children: r.map((t) =>
                  (0, i.jsx)(
                    "div",
                    {
                      id: t.key,
                      ref: a[t.key],
                      style: { display: e === t.key ? "block" : "none" },
                      children: (0, i.jsx)("div", {
                        className: "grid md:grid-cols-3 gap-6",
                        children: l[t.key].features.map((e, t) =>
                          (0, i.jsxs)(
                            "div",
                            {
                              className:
                                "bg-[#101010] rounded-[20px] p-6 space-y-8",
                              children: [
                                e.image,
                                (0, i.jsxs)("div", {
                                  className: "space-y-[10px] text-start",
                                  children: [
                                    (0, i.jsx)("h3", {
                                      className:
                                        "text-xl md:-text-[12px] lg:text-[24px] font-normal lg:font-semibold xl:leading-[32px] tracking-[-0.24px] lg:tracking-[-0.48px] text-[#F1F1EF]",
                                      children: e.title,
                                    }),
                                    (0, i.jsx)("p", {
                                      className:
                                        "text-[#AFAFAF] text-[14px] lg:text-[18px] tracking-[-0.28px] lg:tracking-[-0.36px]",
                                      children: e.description,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                    },
                    t.key
                  )
                ),
              }),
            ],
          }),
        });
      }
    },
    4663: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => x });
      var i = a(95155),
        s = a(12115),
        n = a(47650);
      let r = (e) => {
        let {
            children: t,
            content: a,
            position: r = "auto",
            trigger: l = "hover",
            delay: c = 200,
            offset: o = 8,
            className: d = "",
            contentClassName: p = "",
            disabled: x = !1,
            arrow: m = !0,
          } = e,
          [g, h] = (0, s.useState)(!1),
          [u, f] = (0, s.useState)({ x: 0, y: 0, position: "top" }),
          [v, b] = (0, s.useState)(!1),
          [y, j] = (0, s.useState)(!1),
          w = (0, s.useRef)(null),
          k = (0, s.useRef)(null),
          N = (0, s.useRef)(null);
        (0, s.useLayoutEffect)(() => {
          b(!0);
        }, []);
        let F = (0, s.useCallback)(() => {
          if (!w.current || !k.current) return { x: 0, y: 0, position: "top" };
          let e = w.current.getBoundingClientRect(),
            t = k.current.getBoundingClientRect(),
            a = { width: window.innerWidth, height: window.innerHeight },
            i = {
              top: {
                x: e.left + e.width / 2 - t.width / 2,
                y: e.top - t.height - o,
                position: "top",
              },
              bottom: {
                x: e.left + e.width / 2 - t.width / 2,
                y: e.bottom + o,
                position: "bottom",
              },
              left: {
                x: e.left - t.width - o,
                y: e.top + e.height / 2 - t.height / 2,
                position: "left",
              },
              right: {
                x: e.right + o,
                y: e.top + e.height / 2 - t.height / 2,
                position: "right",
              },
            };
          if ("auto" !== r) {
            let e = i[r],
              s = e.x >= 0 && e.x + t.width <= a.width,
              n = e.y >= 0 && e.y + t.height <= a.height;
            if (s && n) return e;
          }
          for (let e of ["top", "bottom", "right", "left"]) {
            let s = i[e],
              n = s.x >= 0 && s.x + t.width <= a.width,
              r = s.y >= 0 && s.y + t.height <= a.height;
            if (n && r) return s;
          }
          let s = i.top;
          return (
            (s.x = Math.max(8, Math.min(s.x, a.width - t.width - 8))),
            (s.y = Math.max(8, Math.min(s.y, a.height - t.height - 8))),
            s
          );
        }, [r, o]);
        (0, s.useLayoutEffect)(() => {
          g && k.current ? (f(F()), j(!0)) : j(!1);
        }, [g, F]);
        let A = (0, s.useCallback)(() => {
            x ||
              (N.current && clearTimeout(N.current),
              (N.current = setTimeout(() => {
                h(!0);
              }, c)));
          }, [x, c]),
          E = (0, s.useCallback)(() => {
            N.current && clearTimeout(N.current), h(!1);
          }, []),
          C = {
            ...("hover" === l && {
              onMouseEnter: A,
              onMouseLeave: E,
              onFocus: A,
              onBlur: E,
            }),
            ...("click" === l && {
              onClick: () => {
                g ? E() : A();
              },
            }),
          };
        (0, s.useLayoutEffect)(() => {
          let e = (e) => {
            "Escape" === e.key && E();
          };
          if (g)
            return (
              document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
            );
        }, [g, E]),
          (0, s.useLayoutEffect)(() => {
            let e = (e) => {
              "click" === l &&
                g &&
                w.current &&
                k.current &&
                !w.current.contains(e.target) &&
                !k.current.contains(e.target) &&
                E();
            };
            if (g && "click" === l)
              return (
                document.addEventListener("mousedown", e),
                () => document.removeEventListener("mousedown", e)
              );
          }, [g, l, E]);
        let P = () => {
            let { position: e } = u;
            return {
              top: {
                bottom: -6,
                left: "50%",
                transform: "translateX(-50%)",
                borderLeft: "".concat(6, "px solid transparent"),
                borderRight: "".concat(6, "px solid transparent"),
                borderTop: "".concat(6, "px solid rgb(15 23 42)"),
              },
              bottom: {
                top: -6,
                left: "50%",
                transform: "translateX(-50%)",
                borderLeft: "".concat(6, "px solid transparent"),
                borderRight: "".concat(6, "px solid transparent"),
                borderBottom: "".concat(6, "px solid rgb(15 23 42)"),
              },
              left: {
                right: -6,
                top: "50%",
                transform: "translateY(-50%)",
                borderTop: "".concat(6, "px solid transparent"),
                borderBottom: "".concat(6, "px solid transparent"),
                borderLeft: "".concat(6, "px solid rgb(15 23 42)"),
              },
              right: {
                left: -6,
                top: "50%",
                transform: "translateY(-50%)",
                borderTop: "".concat(6, "px solid transparent"),
                borderBottom: "".concat(6, "px solid transparent"),
                borderRight: "".concat(6, "px solid rgb(15 23 42)"),
              },
            }[e];
          },
          S =
            v &&
            g &&
            y &&
            (0, i.jsxs)("div", {
              ref: k,
              className:
                "fixed z-50 px-3 py-2 text-sm text-white tooltip-bg border-1 border-[#FFFFFF33] rounded-lg shadow-lg pointer-events-none transition-all duration-200 ease-out opacity-100 translate-y-0 ".concat(
                  p
                ),
              style: {
                left: u.x,
                top: u.y,
                maxWidth: "calc(100vw - 16px)",
                wordWrap: "break-word",
              },
              role: "tooltip",
              "aria-hidden": !g,
              children: [
                a,
                m &&
                  (0, i.jsx)("div", {
                    className: "absolute w-0 h-0",
                    style: P(),
                  }),
              ],
            }),
          T =
            v &&
            g &&
            !y &&
            (0, i.jsxs)("div", {
              ref: k,
              className:
                "fixed z-50 px-3 py-2 text-sm text-white bg-slate-900 rounded-lg shadow-lg pointer-events-none opacity-0 invisible",
              style: {
                left: -9999,
                top: -9999,
                maxWidth: "calc(100vw - 16px)",
                wordWrap: "break-word",
              },
              children: [
                a,
                m &&
                  (0, i.jsx)("div", {
                    className: "absolute w-0 h-0",
                    style: P(),
                  }),
              ],
            });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              ref: w,
              className: "inline-block ".concat(d),
              ...C,
              "aria-describedby": g ? "tooltip" : void 0,
              children: t,
            }),
            v && (0, n.createPortal)(T, document.body),
            v && (0, n.createPortal)(S, document.body),
          ],
        });
      };
      var l = a(75432),
        c = a(66766),
        o = a(6874),
        d = a.n(o);
      function p(e) {
        let { className: t = "", style: a = {} } = e;
        return (0, i.jsx)("div", {
          className: "animate-pulse bg-[#232323] rounded ".concat(t),
          style: a,
        });
      }
      function x() {
        var e, t;
        let { state: a } = (0, l.r)(),
          s = !a.tokenData || "number" != typeof a.tokenData.phase;
        return (0, i.jsx)("div", {
          className:
            "container mx-auto bg-[#000000] text-white overflow-hidden relative pb-[60px] pt-[110px] lg:pt-[100px] xl:pt-[140px] px-4 md:px-6 lg:px-[50px] xl:px-[100px] space-y-[100px]",
          children: (0, i.jsx)("div", {
            className: "relative z-10 mx-auto",
            children: (0, i.jsxs)("div", {
              className:
                "grid lg:grid-cols-2 xl:gap-12 items-center text-center lg:text-left",
              children: [
                (0, i.jsxs)("div", {
                  className:
                    "flex flex-col items-center lg:items-start z-50 bg-radial-dark-lime-little-more",
                  children: [
                    (null == (e = a.tokenData) ? void 0 : e.stageEnded)
                      ? (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsxs)("div", {
                            className:
                              "inline-flex items-center gap-2 presale-live-badge-white px-3 py-[6px]",
                            children: [
                              (0, i.jsx)(c.default, {
                                src: "/icons/phase-star-white.svg",
                                alt: "Phase Badge",
                                width: 14,
                                height: 14,
                              }),
                              (0, i.jsx)("span", {
                                className:
                                  "text-white font-normal leading-[24px] tracking-[-0.32px] text-[16px]",
                                children: s
                                  ? (0, i.jsx)(p, {
                                      className: "w-16 h-5 bg-[#232323]",
                                    })
                                  : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        "Phase ",
                                        null == (t = a.tokenData)
                                          ? void 0
                                          : t.phase,
                                        " Ended",
                                      ],
                                    }),
                              }),
                            ],
                          }),
                        })
                      : (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsxs)("div", {
                            className:
                              "flex items-center gap-1 presale-live-badge text-[#A6FF00] text-[14px] md:text-[16px] font-normal leading-[24px] tracking-[-0.32px] px-3 py-[6px] rounded-[80px] w-fit mb-[12px] md:mb-[16px]",
                            children: [
                              (0, i.jsx)(c.default, {
                                src: "/icons/star-icon.svg",
                                alt: "Star",
                                width: 18,
                                height: 18,
                              }),
                              " ",
                              s
                                ? (0, i.jsx)(p, {
                                    className: "w-16 h-5 bg-[#232323]",
                                  })
                                : (0, i.jsx)(i.Fragment, {
                                    children: " Presale Now Live!",
                                  }),
                            ],
                          }),
                        }),
                    (0, i.jsxs)("div", {
                      className: "space-y-6 mb-[32px] md:mb-[40px]",
                      children: [
                        (0, i.jsxs)("h1", {
                          className:
                            "text-[32px] text-nowrap md:text-[60px] lg:text-[50px] xl:text-[62px] text-white font-bold leading-[1.2] md:leading- tracking-[-0.64px] md:tracking-[-0.88px] lg:tracking-[-1.24px] mb-[12px] md:mb-[16px]",
                          children: [
                            "Predict the Future",
                            (0, i.jsx)("br", {}),
                            "with Predictive AI",
                          ],
                        }),
                        (0, i.jsx)("p", {
                          className:
                            "text-[#AFAFAF] text-[14px] md:text-[16px] xl:text-[20px] max-w-lg leading-[24px] md:leading-[28px] tracking-[-0.28px] md:tracking-[-0.36px] lg:tracking-[-0.4px]",
                          children:
                            "Join and unlock advanced trading intelligence with predictive AI agents.",
                        }),
                      ],
                    }),
                    
                  ],
                }),
                (0, i.jsx)("div", {
                  className:
                    "relative flex justify-center items-center -mt-5 lg:-mt-0 z-0",
                  children: (0, i.jsx)("div", {
                    className:
                      "relative w-[280px] h-[280px] md:w-[433.28px] md:h-[433.28px] lg:w-[594px] lg:h-[594px]",
                    children: (0, i.jsxs)("video", {
                      autoPlay: !0,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      preload: "auto",
                      className:
                        "object-contain w-full h-full absolute inset-0",
                      poster: "/images/predictive-ai/hero-image.png",
                      children: [
                        (0, i.jsx)("source", {
                          src: "/videos/chart.mp4",
                          type: "video/mp4",
                        }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
    14012: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => n });
      var i = a(95155),
        s = a(66766);
      function n() {
        let e = [
          [
            { name: "Metamask", icon: "/icons/metamask-icon.png" },
            { name: "BNB Chain", icon: "/icons/bnb-chain-icon.png" },
            { name: "Chat GPT", icon: "/icons/chatgpt-icon.png" },
            { name: "Gemini", icon: "/icons/gemini-icon.png" },
            { name: "Ethereum", icon: "/icons/ethereum-icon.png" },
            { name: "Appkit", icon: "/icons/appkit-icon.png" },
            { name: "Foundry", icon: "/icons/foundry-icon.png" },
            { name: "Prometheus", icon: "/icons/prometheus-icon.png" },
            { name: "Grafana", icon: "/icons/grafana-icon.png" },
            { name: "Langchain", icon: "/icons/langchain-icon.png" },
          ],
          [
            { name: "Viem", icon: "/icons/viem-icon.png" },
            { name: "Ponder", icon: "/icons/ponder-icon.png" },
            { name: "Solidity", icon: "/icons/solidity-icon.png" },
            { name: "React", icon: "/icons/react-icon.png" },
            { name: "Next.js", icon: "/icons/nextjs-icon.png" },
            { name: "Claude", icon: "/icons/claude-icon.png" },
            { name: "Docusaurus", icon: "/icons/docusaurus-icon.png" },
            { name: "Cloudflare", icon: "/icons/cloudflare-icon.png" },
            { name: "Google Cloud", icon: "/icons/google-cloud-icon.png" },
          ],
        ];
        return (0, i.jsxs)("div", {
          className: "bg-[#000000] overflow-hidden my-[30px] md:my-[60px]",
          children: [
            (0, i.jsx)("div", {
              className: "mb-[32px] md:mb-[64px]",
              children: (0, i.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-center text-center space-y-[8px] md:space-y-[16px]",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "flex items-center justify-center gap-2 text-[#A6FF00] text-[18px] font-normal leading-[24px] tracking-[-0.36px] w-fit",
                    children: [
                      (0, i.jsx)(s.default, {
                        src: "/icons/star-icon.svg",
                        alt: "Star",
                        width: 18,
                        height: 18,
                      }),
                      " ",
                      "Technology",
                    ],
                  }),
                  (0, i.jsx)("h2", {
                    className:
                      "text-[32px] lg:text-[46px] font-semibold lg:leading-[1.2] tracking-[-0.48px] md:tracking-[-0.64px] lg:tracking-[-0.92px] text-white",
                    children: "Integrated With",
                  }),
                ],
              }),
            }),
            (0, i.jsx)("div", {
              className: "relative mb-[24px] lg:mb-[30px]",
              children: (0, i.jsx)("div", {
                className: "flex animate-scroll-left gap-3 md:gap-6",
                children: [void 0, void 0, void 0, void 0, void 0].map((t, a) =>
                  e[0].map((e, t) =>
                    (0, i.jsxs)(
                      "div",
                      {
                        className:
                          "flex-shrink-0 integrated-company-logo-bg pl-3 lg:pl-4 pr-[20px] lg:pr-[26px] py-[10px] lg:py-[14px] flex items-center gap-3",
                        children: [
                          (0, i.jsx)("div", {
                            className: "flex items-center justify-center",
                            children: (0, i.jsx)("div", {
                              className:
                                "relative w-[42.85px] h-[42.85px] md:w-[48px] md:h-[48px] rounded-full",
                              children: (0, i.jsx)(s.default, {
                                src: e.icon,
                                alt: e.name,
                                fill: !0,
                                className: "object-contain rounded-full",
                              }),
                            }),
                          }),
                          (0, i.jsx)("span", {
                            className:
                              "text-white text-[12px] md:text-[14px] lg:text-[22px] font-normal",
                            children: e.name,
                          }),
                        ],
                      },
                      "".concat(a, "-").concat(t)
                    )
                  )
                ),
              }),
            }),
            (0, i.jsx)("div", {
              className: "relative",
              children: (0, i.jsx)("div", {
                className: "flex animate-scroll-right gap-3 md:gap-6",
                children: [void 0, void 0, void 0, void 0, void 0].map((t, a) =>
                  e[1].map((e, t) =>
                    (0, i.jsxs)(
                      "div",
                      {
                        className:
                          "flex-shrink-0 integrated-company-logo-bg pl-3 lg:pl-4 pr-[20px] lg:pr-[26px] py-[10px] lg:py-[14px] flex items-center gap-3",
                        children: [
                          (0, i.jsx)("div", {
                            className: "flex items-center justify-center",
                            children: (0, i.jsx)("div", {
                              className:
                                "relative w-[42.85px] h-[42.85px] md:w-[48px] md:h-[48px] rounded-full",
                              children: (0, i.jsx)(s.default, {
                                src: e.icon,
                                alt: e.name,
                                fill: !0,
                                className: "object-contain rounded-full",
                              }),
                            }),
                          }),
                          (0, i.jsx)("span", {
                            className:
                              "text-white text-[12px] md:text-[14px] lg:text-[22px] font-normal",
                            children: e.name,
                          }),
                        ],
                      },
                      "".concat(a, "-").concat(t)
                    )
                  )
                ),
              }),
            }),
          ],
        });
      }
    },
    26918: (e, t, a) => {
      Promise.resolve().then(a.t.bind(a, 33063, 23)),
        Promise.resolve().then(a.bind(a, 4663)),
        Promise.resolve().then(a.bind(a, 496)),
        Promise.resolve().then(a.bind(a, 14012)),
        Promise.resolve().then(a.bind(a, 44471)),
        Promise.resolve().then(a.bind(a, 38660)),
        Promise.resolve().then(a.bind(a, 54332)),
        Promise.resolve().then(a.bind(a, 75432)),
        Promise.resolve().then(a.bind(a, 40137));
    },
    31255: (e, t, a) => {
      "use strict";
      a.d(t, { G$: () => s, X8: () => n, rx: () => i });
      let i = "0xComingSoon",
        s = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        n = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    },
    38660: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => p });
      var i = a(95155),
        s = a(66766),
        n = a(12115),
        r = a(62720),
        l = a(52681),
        c = a(95056),
        o = a(94065);
      let d = [
        {
          quarter: "01",
          title: "Launch",
          items: [
            "Ideation & Initial Infrastructure",
            "Ozak Data Vault",
            "Research & Design",
            "Smart Contract Development",
          ],
        },
        {
          quarter: "02",
          title: "Development P1",
          items: [
            "Ozak Machine Learning Engine",
            "Ozak Nodes",
            "Ozak Data Vault",
            "Ozak Personal Platform",
          ],
        },
        {
          quarter: "03",
          title: "Development P2",
          items: [
            "Ozak Business Platform",
            "Ozak Data Vault",
            "Ozak Machine Learning Engine",
            "Ozak Stream Network Testnet",
          ],
        },
        {
          quarter: "04",
          title: "Growth",
          items: [
            "Ozak Personal Platform",
            "Ozak Business Platform",
            "Ozak Stream Network mainnet",
            "OZAK AI Agents (PAA)",
          ],
        },
      ];
      function p() {
        let [e, t] = (0, n.useState)(0),
          a = (0, n.useRef)(null),
          { scrollYProgress: p } = (0, r.L)({
            target: a,
            offset: ["start start", "end end"],
          }),
          x = (0, l.G)(p, [0, 1], ["0%", "100%"]);
        return (
          (0, c.L)(p, "change", (e) => {
            t(Math.min(Math.floor(e * d.length + 0.5) - 1, d.length));
          }),
          (0, i.jsx)("div", {
            id: "roadmap",
            ref: a,
            className:
              "container mx-auto relative bg-[#000000] pt-[60px] mb-[30px] md:pt-[120px] px-4 md:px-6 lg:px-[50px] xl:px-[100px]",
            children: (0, i.jsx)("div", {
              className: "flex items-start",
              children: (0, i.jsx)("div", {
                className: "mx-auto w-full",
                children: (0, i.jsxs)("div", {
                  className:
                    "grid md:grid-cols-2 items-start gap-[40px] md:gap-[50px] lg:gap-[113px]",
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "space-y-4 md:sticky md:top-1/3 md:mt-[60px] md:transform md:-translate-y-1/3",
                      children: [
                        (0, i.jsxs)("div", {
                          className:
                            "flex items-center gap-2 text-[#A6FF00] text-[18px] font-normal leading-[24px] tracking-[-0.36px] w-fit mb-4",
                          children: [
                            (0, i.jsx)(s.default, {
                              src: "/icons/star-icon.svg",
                              alt: "Star",
                              width: 18,
                              height: 18,
                            }),
                            "Roadmap",
                          ],
                        }),
                        (0, i.jsxs)("h2", {
                          className:
                            "md:text-nowrap text-[32px] lg:text-[46px] font-semibold leading-[1.2] tracking-[-0.48px] md:tracking-[-0.64px] lg:tracking-[-0.92px] text-white",
                          children: [
                            "Our Timeline on",
                            (0, i.jsx)("br", {}),
                            "Development Goals.",
                          ],
                        }),
                        (0, i.jsx)("p", {
                          className:
                            "text-[#AFAFAF] text-[14px] lg:text-[18px] tracking-[-0.28px] lg:tracking-[-0.36px]",
                          children:
                            "The roadmap demonstrates our approach towards achieving major milestones & building fast. Continuous feedback loop with our users helps us build products which they use.",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "absolute left-0 top-0 w-[5.37px] md:w-[4.9px] lg:w-[7px] h-full bg-[#FFFFFF1A]",
                          children: (0, i.jsx)(o.P.div, {
                            className: "w-full bg-[#a6ff00] origin-top",
                            style: { height: x },
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "relative mt-5",
                          children: (0, i.jsx)("div", {
                            className: "flex flex-col gap-[40px]",
                            children: d.map((t, a) =>
                              (0, i.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center gap-[18.44px] md:gap-[16.86px] lg:gap-[24px] xl:gap-[74px]",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className:
                                        "relative w-[40px] min-w-[40px]",
                                      children: (0, i.jsx)("div", {
                                        className:
                                          "absolute top-1/2 left-0 h-[5.57px] md:h-[4.9px] lg:h-[7px] w-[38.4px] md:w-[35.12px] lg:w-[50px] -translate-y-1/2 transition-colors duration-300",
                                        style: {
                                          backgroundColor:
                                            a <= e ? "#A6FF00" : "#FFFFFF1A",
                                        },
                                      }),
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "".concat(
                                        a == e
                                          ? "timeline-card-bg-active"
                                          : "timeline-card-bg",
                                        " p-6 lg:p-[40px] flex-1 max-w-[346px]"
                                      ),
                                      children: (0, i.jsxs)("div", {
                                        className:
                                          "space-y-[4.3px] md:space-y-[10.14px] lg:space-y-4",
                                        children: [
                                          (0, i.jsx)("div", {
                                            className:
                                              "text-white text-[22px] font-medium leading-[32px] tracking-[-2px]",
                                            children: t.quarter,
                                          }),
                                          (0, i.jsx)("h3", {
                                            className:
                                              "text-[#a6ff00] text-2xl lg:text-[32px] font-semibold tracking-[-2px]",
                                            children: t.title,
                                          }),
                                          (0, i.jsx)("div", {
                                            className: "space-y-3",
                                            children: t.items.map((e, t) =>
                                              (0, i.jsx)(
                                                "div",
                                                {
                                                  className:
                                                    "text-white text-sm lg:text-[18px] leading-[24px] tracking-[-0.36px]",
                                                  children: e,
                                                },
                                                t
                                              )
                                            ),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                },
                                a
                              )
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      }
    },
    40137: (e, t, a) => {
      "use strict";
      a.d(t, { AppKitProvider: () => g });
      var i = a(95155),
        s = a(51235),
        n = a(48374),
        r = a(93151),
        l = a(87017),
        c = a(26715),
        o = a(85894);
      let d = new l.E(),
        p = "4d641d7b4f2ca691972400f7604cc314";
      if (!p) throw Error("Project ID not set");
      let x = [r.rCZ],
        m = new o.D({ networks: x, projectId: p, ssr: !0 });
      function g(e) {
        let { children: t } = e;
        return (0, i.jsx)(n.x, {
          config: m.wagmiConfig,
          children: (0, i.jsx)(c.Ht, { client: d, children: t }),
        });
      }
      (0, s.sX)({
        adapters: [m],
        networks: x,
        projectId: p,
        metadata: {
          name: "Ozak Presale",
          description: "Ozak Presale Application",
          url: "https://ozakai.xyz",
          icons: ["https://avatars.githubusercontent.com/u/179229932"],
        },
        defaultNetwork: r.rCZ,
        features: { analytics: !0, email: !1, socials: ["google"] },
      });
    },
    44471: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => n });
      var i = a(95155),
        s = a(66766);
      function n() {
        let e = [
          {
            name: "TechBullion",
            image: (0, i.jsx)(s.default, {
              src: "/images/predictive-ai/techbullion.svg",
              alt: "TechBullion",
              width: 230,
              height: 63.271,
              className: "object-contain",
            }),
          },
          {
            name: "ThePrint",
            image: (0, i.jsx)(s.default, {
              src: "/images/predictive-ai/theprint.svg",
              alt: "ThePrint",
              width: 203.57,
              height: 38,
              className: "object-contain",
            }),
          },
          {
            name: "Cointelegraph",
            image: (0, i.jsx)(s.default, {
              src: "/images/predictive-ai/cointelegraph.svg",
              alt: "Cointelegraph",
              width: 248.962,
              height: 70,
              className: "object-contain",
            }),
          },
          {
            name: "CoinMarketCap",
            image: (0, i.jsx)(s.default, {
              src: "/images/predictive-ai/coinmarketcap.svg",
              alt: "CoinMarketCap",
              width: 221.535,
              height: 38,
              className: "object-contain",
            }),
          },
          {
            name: "Trade Brains",
            image: (0, i.jsx)(s.default, {
              src: "/images/predictive-ai/tradebrains.svg",
              alt: "Trade Brains",
              width: 296.182,
              height: 67.472,
              className: "object-contain",
            }),
          },
          {
            name: "CoinPedia",
            image: (0, i.jsx)(s.default, {
              src: "/images/predictive-ai/coinpedia.svg",
              alt: "CoinPedia",
              width: 202.4,
              height: 46,
              className: "object-contain",
            }),
          },
          {
            name: "Analytics Insight",
            image: (0, i.jsx)(s.default, {
              src: "/images/predictive-ai/analytics.svg",
              alt: "Analytics Insight",
              width: 232.5,
              height: 31,
              className: "object-contain",
            }),
          },
          {
            name: "CryptoDaily",
            image: (0, i.jsx)(s.default, {
              src: "/images/predictive-ai/cryptodaily.svg",
              alt: "CryptoDaily",
              width: 184.89,
              height: 47,
              className: "object-contain",
            }),
          },
          {
            name: "Coinspeaker",
            image: (0, i.jsx)(s.default, {
              src: "/images/predictive-ai/coinspeaker.png",
              alt: "Coinspeaker",
              width: 246.673,
              height: 68.1,
              className: "object-contain",
            }),
          },
          {
            name: "CoinCentral",
            image: (0, i.jsx)(s.default, {
              src: "/images/predictive-ai/coincentral.png",
              alt: "CoinCentral",
              width: 269.487,
              height: 53.703,
              className: "object-contain",
            }),
          },
          {
            name: "crypto reporter",
            image: (0, i.jsx)(s.default, {
              src: "/images/predictive-ai/cryptoreporter.svg",
              alt: "crypto reporter",
              width: 261.818,
              height: 128,
              className: "object-contain",
            }),
          },
          {
            name: "LIVE NEWS",
            image: (0, i.jsx)(s.default, {
              src: "/images/predictive-ai/livenews.svg",
              alt: "LIVE NEWS",
              width: 244.8,
              height: 68,
              className: "object-contain",
            }),
          },
        ];
        return (0, i.jsx)("div", {
          className:
            "container text-center md:text-left mx-auto bg-[#000000] my-[30px] md:my-[60px] px-4 md:px-6 lg:px-[50px] xl:px-[100px]",
          children: (0, i.jsxs)("div", {
            className: "",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "grid md:grid-cols-2 items-start md:items-center mb-6 lg:mb-[40px]",
                children: [
                  (0, i.jsxs)("div", {
                    className: "text-center md:text-left mb-[16px]",
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "flex items-center justify-center md:justify-start w-full gap-2 text-[#A6FF00] text-[18px] font-normal leading-[24px] tracking-[-0.36px] md:w-fit md:mb-4",
                        children: [
                          (0, i.jsx)(s.default, {
                            src: "/icons/star-icon.svg",
                            alt: "Star",
                            width: 18,
                            height: 18,
                          }),
                          " ",
                          "Featured",
                        ],
                      }),
                      (0, i.jsx)("h2", {
                        className:
                          "text-white text-[32px] md:text-4xl lg:text-[34px] xl:text-[54px] font-bold md:leading-[44px] xl:leading-[64px] tracking-[-0.48px] md:tracking-[-1.08px]",
                        children: "As seen on",
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "md:text-right",
                    children: (0, i.jsx)("p", {
                      className:
                        "text-[#AFAFAF] text-[14px] lg:text-[17px] xl:text-[18px] lg:leading-[28px] tracking-[-0.28px] md:tracking-[-0.44px] max-w-[474px] ml-auto",
                      children:
                        "Ozak AI has been making news lately & featured in many major publications. Stay tuned for more!",
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                children: e.map((e, t) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className:
                        "group relative p-4 md:p-8 flex items-center justify-center h-32 transition-all duration-300 overflow-hidden media-card",
                      children: (0, i.jsx)("div", {
                        className: "relative z-10 mix-blend-luminosity",
                        children: e.image,
                      }),
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        });
      }
    },
    50090: (e, t, a) => {
      "use strict";
      a.d(t, { bq: () => g, kb: () => x, yP: () => m });
      var i = a(61046),
        s = a(14493),
        n = a(1405),
        r = a(44494),
        l = a(1666),
        c = a(9428),
        o = a(31255),
        d = a(97748);
      let p = { ETH: 18, USDT: 6, USDC: 6 },
        x = async function (e, t, a) {
          let r,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : i.m8,
            d = p[t];
          return (
            (r =
              "ETH" === t
                ? (await (0, l.r)(e, { address: a })).value
                : await (0, c.J)(e, {
                    abi: s.xw,
                    address: o,
                    functionName: "balanceOf",
                    args: [a],
                  })),
            Number(Number((0, n.J)(r, d)).toFixed(3))
          );
        },
        m = (e) => ("USDC" === e ? o.G$ : "USDT" === e ? o.X8 : i.Xd),
        g = async (e, t) => {
          if (!t) return;
          let a = await (0, c.J)(e, {
            abi: d.b,
            address: o.rx,
            functionName: "getLatestPrice",
          });
          return parseInt((0, r.c)(a));
        };
    },
    54332: (e, t, a) => {
      "use strict";
      a.d(t, { ReferralProvider: () => r, T: () => l });
      var i = a(95155),
        s = a(12115);
      let n = (0, s.createContext)(void 0),
        r = (e) => {
          let { children: t } = e,
            [a, r] = (0, s.useState)(null);
          return (0, i.jsx)(n.Provider, {
            value: { referralCode: a, setReferralCode: r },
            children: t,
          });
        },
        l = () => {
          let e = (0, s.useContext)(n);
          if (void 0 === e)
            throw Error("useReferral must be used within a ReferralProvider");
          return e;
        };
    },
    75432: (e, t, a) => {
      "use strict";
      a.d(t, { TokenProvider: () => m, r: () => g });
      var i = a(95155),
        s = a(12115),
        n = a(53031),
        r = a(2145),
        l = a(50090),
        c = a(61046),
        o = a(54332);
      let d = {
        tokenData: null,
        selectedCurrency: "ETH",
        enterAmount: "",
        walletBalance: 0,
        termsAccepted: !1,
        referralCode: "",
        loading: !1,
        error: null,
        purchaseLoading: !1,
        ethPrice: 0,
        referralCodeValue: "",
        transactionHash: null,
      };
      function p(e, t) {
        switch (t.type) {
          case "SET_LOADING":
            return { ...e, loading: t.payload };
          case "SET_TOKEN_DATA":
            return { ...e, tokenData: t.payload, loading: !1 };
          case "SET_SELECTED_CURRENCY":
            return { ...e, selectedCurrency: t.payload, enterAmount: "" };
          case "SET_ENTER_AMOUNT":
            return { ...e, enterAmount: t.payload };
          case "SET_WALLET_BALANCE":
            return { ...e, walletBalance: t.payload };
          case "SET_TERMS_ACCEPTED":
            return { ...e, termsAccepted: t.payload };
          case "SET_REFERRAL_CODE":
            return { ...e, referralCode: t.payload };
          case "SET_REFERRAL_CODE_VALUE":
            return { ...e, referralCodeValue: t.payload };
          case "SET_ERROR":
            return { ...e, error: t.payload };
          case "SET_PURCHASE_LOADING":
            return { ...e, purchaseLoading: t.payload };
          case "SET_ETH_PRICE":
            return { ...e, ethPrice: t.payload };
          case "SET_TRANSACTION_HASH":
            return { ...e, transactionHash: t.payload };
          case "CLEAR_ERROR":
            return { ...e, error: null };
          default:
            return e;
        }
      }
      let x = (0, s.createContext)(void 0);
      function m(e) {
        var t;
        let { children: a } = e,
          [m, g] = (0, s.useReducer)(p, d),
          h = (0, n.U)(),
          { address: u } = (0, r.F)(),
          { setReferralCode: f } = (0, o.T)(),
          v = async () => {
            g({ type: "SET_LOADING", payload: !0 });
            try {
              let e = await fetch(
                  "".concat(
                    "https://app.ozakai.xyz",
                    "/api/v2/oz/get-presale-stats"
                  )
                ),
                { data: t } = await e.json(),
                a = parseFloat(t.tokensAllocated) - parseFloat(t.tokensSold),
                i = {
                  phase: parseInt(t.currentPhase),
                  totalOzSold: parseFloat(t.tokensSold).toLocaleString(),
                  remaining: a.toLocaleString(),
                  ozPrice: t.currentPrice,
                  nextPhaseTarget: 0.01,
                  targetPrice: 1,
                  totalRaised: t.usdRaisedSoFar.toLocaleString(),
                  stageEnded: t.stageEnded,
                };
              JSON.stringify(m.tokenData) !== JSON.stringify(i) &&
                g({ type: "SET_TOKEN_DATA", payload: i }),
                g({ type: "SET_LOADING", payload: !1 });
            } catch (e) {
              g({ type: "SET_ERROR", payload: "Failed to fetch token data" }),
                g({ type: "SET_LOADING", payload: !1 });
            }
          },
          b = async () => {
            try {
              let e = await fetch(
                  ""
                    .concat("https://app.ozakai.xyz", "/user/referral-code/")
                    .concat(u)
                ),
                { referralCode: t } = await e.json();
              f(t);
            } catch (e) {
              console.error(e);
            }
          },
          y = (0, s.useMemo)(() => {
            var e;
            if (
              !m.enterAmount ||
              !(null == (e = m.tokenData) ? void 0 : e.ozPrice) ||
              isNaN(Number(m.enterAmount))
            )
              return "0";
            let t = Number(m.enterAmount),
              a = m.tokenData.ozPrice,
              i = (0, l.yP)(m.selectedCurrency),
              s = 0;
            return ((i === c.Xd ? t * m.ethPrice : t) / a).toLocaleString(
              "en-US",
              { maximumFractionDigits: 3 }
            );
          }, [
            m.enterAmount,
            null == (t = m.tokenData) ? void 0 : t.ozPrice,
            m.selectedCurrency,
            m.ethPrice,
          ]);
        return (
          (0, s.useEffect)(() => {
            v();
            let e = setInterval(() => {
              v();
            }, 3e4);
            return () => clearInterval(e);
          }, []),
          (0, s.useEffect)(() => {
            (async () => {
              if (u && h) {
                let e = await (0, l.bq)(h, u);
                "number" == typeof e &&
                  g({ type: "SET_ETH_PRICE", payload: e }),
                  b();
              }
            })();
          }, [u, h]),
          (0, s.useEffect)(() => {
            let e = async () => {
              if (u) {
                let e = (0, l.yP)(m.selectedCurrency);
                g({
                  type: "SET_WALLET_BALANCE",
                  payload: Number(await (0, l.kb)(h, m.selectedCurrency, u, e)),
                });
              }
            };
            u && e();
          }, [u, m.selectedCurrency, h]),
          (0, i.jsx)(x.Provider, {
            value: {
              state: m,
              dispatch: g,
              calculateOzReceived: y,
              fetchTokenData: v,
              setTransactionHash: (e) => {
                g({ type: "SET_TRANSACTION_HASH", payload: e });
              },
            },
            children: a,
          })
        );
      }
      function g() {
        let e = (0, s.useContext)(x);
        if (void 0 === e)
          throw Error("useToken must be used within a TokenProvider");
        return e;
      }
    },
    97748: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => i });
      let i = (0, a(17199).U)([
        "function buyTokens(address tokenAddress, uint256 usdAmount, address referrer)",
        "function buyTokensETH(address referrer) payable",
        "function getLatestPrice() returns (uint256)",
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [6874, 3063, 4134, 6155, 3007, 4004, 8441, 1684, 7358], () =>
      t(26918)
    ),
      (_N_E = e.O());
  },
]);
