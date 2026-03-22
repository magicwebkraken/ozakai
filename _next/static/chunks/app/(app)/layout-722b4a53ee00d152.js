(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4944],
  {
    16880: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => b });
      var a = r(95155),
        s = r(12115),
        n = r(62177),
        i = r(68309),
        l = r(90221),
        o = r(30285),
        c = r(92138),
        d = r(27859),
        x = r(66766),
        p = r(6874),
        m = r.n(p),
        h = r(64315),
        u = r(93347),
        f = r(51013);
      let g = i.Ik({
        email: i.Yj().email("Please enter a valid email address"),
      });
      function b() {
        let [e, t] = (0, s.useState)("idle"),
          [r, i] = (0, s.useState)(null),
          {
            register: p,
            handleSubmit: b,
            reset: F,
            formState: { errors: v },
            watch: w,
            clearErrors: j,
          } = (0, n.mN)({ resolver: (0, l.u)(g) }),
          k = w("email");
        (0, s.useEffect)(() => {
          g.shape.email.safeParse(k).success && v.email && j("email");
        }, [k, v.email, j]);
        let N = async (e) => {
          t("loading"), i(null);
          try {
            let r = await fetch(
                "".concat("https://app.ozakai.xyz", "/newsletter/subscribe"),
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: e.email }),
                }
              ),
              a = await r.json();
            r.ok
              ? (t("success"),
                i(
                  (null == a ? void 0 : a.message) || "Subscribed successfully!"
                ),
                F())
              : (t("error"),
                i(
                  (null == a ? void 0 : a.message) ||
                    "Subscription failed. Please try again."
                ));
          } catch (e) {
            t("error"), i("Something went wrong. Please try again.");
          }
          setTimeout(() => {
            i(null), t("idle");
          }, 5e3);
        };
        return (0, a.jsx)("footer", {
          className: "bg-[#0E0F11] text-white pt-[60px] lg:pt-[100px]",
          children: (0, a.jsxs)("div", {
            className:
              "container px-4 md:px-6 lg:px-[50px] xl:px-[100px] mx-auto",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-[60px]",
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("div", {
                        className: "mb-[44px]",
                        children: (0, a.jsx)(m(), {
                          href: "/",
                          className: "inline-block",
                          children: (0, a.jsx)("div", {
                            className: "relative w-[158.502px] h-[35px]",
                            children: (0, a.jsx)(x.default, {
                              src: "/images/logo-full.svg",
                              alt: "OZAK AI Logo",
                              fill: !0,
                              className: "object-contain",
                              priority: !0,
                            }),
                          }),
                        }),
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "text-[#999A99] text-[18px] md:text-[19.556px] lg:text-[22px] leading-[30px] md:leading-[26px] lg:leading-[30px] tracking-[-0.72px] md:tracking-[-0.782px] lg:tracking-[-0.88px] mb-[44px] max-w-[320px]",
                        children:
                          "Join our newsletters to catch latest updates on Ozak AI",
                      }),
                      (0, a.jsxs)("form", {
                        className: "mb-8 max-w-[320px]",
                        onSubmit: b(N),
                        noValidate: !0,
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex flex-col items-stretch gap-2",
                            children: [
                              (0, a.jsx)("button", {
                                type: "submit",
                                className:
                                  "self-end mb-[-30px] z-10 w-[38px] h-[38px] newsletter-button-bg text-black rounded-full flex items-center justify-center cursor-pointer",
                                style: { marginBottom: "-30px" },
                                tabIndex: -1,
                                "aria-label": "Subscribe",
                                disabled: "loading" === e,
                                children:
                                  "loading" === e
                                    ? (0, a.jsx)(u.WEG, {
                                        className:
                                          "w-4 h-4 animate-spin text-black",
                                      })
                                    : (0, a.jsx)(c.A, { className: "w-4 h-4" }),
                              }),
                              (0, a.jsx)("input", {
                                type: "email",
                                placeholder: "Email address",
                                className:
                                  "flex-1 bg-transparent border-0 border-b border-[#FFFFFF66] rounded-none px-0 pb-3 text-white placeholder:text-[#FFFFFF80] focus:outline-none",
                                ...p("email"),
                                disabled: "loading" === e,
                                required: !0,
                                "aria-label": "Email address",
                                autoComplete: "email",
                              }),
                            ],
                          }),
                          v.email &&
                            (0, a.jsx)("div", {
                              className: "mt-3 text-sm text-red-400",
                              role: "alert",
                              children: v.email.message,
                            }),
                          r &&
                            (0, a.jsx)("div", {
                              className: "mt-3 text-sm ".concat(
                                "success" === e
                                  ? "text-[#a6ff00]"
                                  : "text-red-400"
                              ),
                              role: "error" === e ? "alert" : void 0,
                              children: r,
                            }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-4.5 md:gap-4 mb-4",
                        children: [
                          (0, a.jsx)(m(), {
                            href: "https://x.com/0zak_aiX",
                            target: "_blank",
                            children: (0, a.jsx)(h.TCj, {
                              className: "w-6 h-6 xl:w-7 xl:h-7",
                            }),
                          }),
                          (0, a.jsx)(m(), {
                            href: "https://t.me/ozakai_chat",
                            target: "_blank",
                            children: (0, a.jsx)(u.e1t, {
                              className: "w-6 h-6 xl:w-7 xl:h-7",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h3", {
                        className: "text-white font-medium mb-6 text-[16px]",
                        children: "AI Agents",
                      }),
                      (0, a.jsx)("ul", {
                        className: "space-y-4",
                        children: [
                          { label: "For Business", section: "individuals" },
                          { label: "For Traders", section: "individuals" },
                          { label: "DePIN", section: "individuals" },
                        ].map((e) => {
                          let { label: t, section: r } = e;
                          return (0, a.jsx)(
                            "li",
                            {
                              children: (0, a.jsx)(m(), {
                                href: "/predictive-ai#".concat(r),
                                className:
                                  "text-[#FFFFFFCC] text-[18px] font-normal tracking-[-0.72px] hover:text-white transition",
                                children: t,
                              }),
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "mt-12 border-t border-[#3F3F3F] pt-6 pb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#8b8b8b]",
                children: [
                  (0, a.jsx)("p", {
                    className:
                      "order-3 md:order-1 text-[14px] tracking-[-0.64px]",
                    children: "Copyright @ 2026 Ozak AI",
                  }),
                  (0, a.jsxs)(o.$, {
                    variant: "ghost",
                    className:
                      "order-2 md:order-3 back-to-top-button text-[#B3B3B3] hover:text-white hover:border-white text-[16px] tracking-[-0.64px] px-4 py-2 flex items-center gap-2 cursor-pointer",
                    onClick: () => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    },
                    "aria-label": "Back to Top",
                    children: [
                      (0, a.jsx)(d.N1, { className: "w-5 h-5" }),
                      "Back to Top",
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    30285: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => o, r: () => l });
      var a = r(95155),
        s = r(41674),
        n = r(99708),
        i = r(74466);
      r(12115);
      let l = (0, i.F)(
          "inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            defaultVariants: { size: "default", variant: "default" },
            variants: {
              size: {
                clear: "",
                default: "h-10 px-4 py-2",
                icon: "h-10 w-10",
                lg: "h-11 rounded px-8",
                sm: "h-9 rounded px-3",
              },
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                ghost: "hover:bg-card hover:text-accent-foreground",
                link: "text-primary items-start justify-start underline-offset-4 hover:underline",
                outline:
                  "border border-border bg-background hover:bg-card hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              },
            },
          }
        ),
        o = (e) => {
          let {
              asChild: t = !1,
              className: r,
              size: i,
              variant: o,
              ref: c,
              ...d
            } = e,
            x = t ? n.DX : "button";
          return (0, a.jsx)(x, {
            className: (0, s.cn)(l({ className: r, size: i, variant: o })),
            ref: c,
            ...d,
          });
        };
    },
    30347: () => {},
    31255: (e, t, r) => {
      "use strict";
      r.d(t, { G$: () => s, X8: () => n, rx: () => a });
      let a = "0x02b4a1b6de8e1403b70b842cc715aea86a45583c",
        s = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        n = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    },
    40137: (e, t, r) => {
      "use strict";
      r.d(t, { AppKitProvider: () => h });
      var a = r(95155),
        s = r(51235),
        n = r(48374),
        i = r(93151),
        l = r(87017),
        o = r(26715),
        c = r(85894);
      let d = new l.E(),
        x = "4d641d7b4f2ca691972400f7604cc314";
      if (!x) throw Error("Project ID not set");
      let p = [i.rCZ],
        m = new c.D({ networks: p, projectId: x, ssr: !0 });
      function h(e) {
        let { children: t } = e;
        return (0, a.jsx)(n.x, {
          config: m.wagmiConfig,
          children: (0, a.jsx)(o.Ht, { client: d, children: t }),
        });
      }
      (0, s.sX)({
        adapters: [m],
        networks: p,
        projectId: x,
        metadata: {
          name: "Ozak",
          description: "Ozak Application",
          url: "https://ozakai.xyz",
          icons: ["https://avatars.githubusercontent.com/u/179229932"],
        },
        defaultNetwork: i.rCZ,
        features: { analytics: !0, email: !1, socials: ["google"] },
      });
    },
    41674: (e, t, r) => {
      "use strict";
      r.d(t, { cn: () => n });
      var a = r(52596),
        s = r(39688);
      function n() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, s.QP)((0, a.$)(t));
      }
    },
    50090: (e, t, r) => {
      "use strict";
      r.d(t, { bq: () => h, kb: () => p, yP: () => m });
      var a = r(61046),
        s = r(14493),
        n = r(1405),
        i = r(44494),
        l = r(1666),
        o = r(9428),
        c = r(31255),
        d = r(97748);
      let x = { ETH: 18, USDT: 6, USDC: 6 },
        p = async function (e, t, r) {
          let i,
            c =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : a.m8,
            d = x[t];
          return (
            (i =
              "ETH" === t
                ? (await (0, l.r)(e, { address: r })).value
                : await (0, o.J)(e, {
                    abi: s.xw,
                    address: c,
                    functionName: "balanceOf",
                    args: [r],
                  })),
            Number(Number((0, n.J)(i, d)).toFixed(3))
          );
        },
        m = (e) => ("USDC" === e ? c.G$ : "USDT" === e ? c.X8 : a.Xd),
        h = async (e, t) => {
          if (!t) return;
          let r = await (0, o.J)(e, {
            abi: d.b,
            address: c.rx,
            functionName: "getLatestPrice",
          });
          return parseInt((0, i.c)(r));
        };
    },
    50522: (e, t, r) => {
      Promise.resolve().then(r.t.bind(r, 6874, 23)),
        Promise.resolve().then(r.t.bind(r, 33063, 23)),
        Promise.resolve().then(r.t.bind(r, 69243, 23)),
        Promise.resolve().then(r.t.bind(r, 71345, 23)),
        Promise.resolve().then(r.t.bind(r, 30347, 23)),
        Promise.resolve().then(r.bind(r, 16880)),
        Promise.resolve().then(r.bind(r, 70810)),
        Promise.resolve().then(r.bind(r, 97107)),
        Promise.resolve().then(r.bind(r, 86164)),
        Promise.resolve().then(r.bind(r, 54332)),
        Promise.resolve().then(r.bind(r, 75432)),
        Promise.resolve().then(r.bind(r, 40137));
    },
    54332: (e, t, r) => {
      "use strict";
      r.d(t, { ReferralProvider: () => i, T: () => l });
      var a = r(95155),
        s = r(12115);
      let n = (0, s.createContext)(void 0),
        i = (e) => {
          let { children: t } = e,
            [r, i] = (0, s.useState)(null);
          return (0, a.jsx)(n.Provider, {
            value: { referralCode: r, setReferralCode: i },
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
    70810: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => n });
      var a = r(95155),
        s = r(66766);
      function n() {
        let e = [
          {
            icon: (0, a.jsx)("div", {
              className:
                "relative w-[20px] h-[20px] md:w-[25px] md:h-[25px] flex items-center justify-center",
              children: (0, a.jsx)(s.default, {
                src: "/icons/twitter.svg",
                alt: "Twitter",
                fill: !0,
                className: "object-contain",
              }),
            }),
            href: "https://x.com/0zak_aiX",
          },
          {
            icon: (0, a.jsx)("div", {
              className:
                "relative w-[40px] h-[40px] flex items-center justify-center",
              children: (0, a.jsx)(s.default, {
                src: "/icons/telegram.svg",
                alt: "Telegram",
                fill: !0,
                className: "object-contain",
              }),
            }),
            href: "https://t.me/ozakai_chat",
          },

        ];
        return (0, a.jsx)("div", {
          className: "flex justify-center gap-2 md:gap-4",
          children: e.map((e, t) =>
            (0, a.jsx)(
              "button",
              {
                onClick: () => window.open(e.href, "_blank"),
                className:
                  "w-[50px] h-[50px] md:w-[64px] md:h-[64px] px-2.5 py-3 md:px-4 md:py-4.5 socials-bg rounded-full flex items-center justify-center transition-colors group cursor-pointer",
                children: e.icon,
              },
              t
            )
          ),
        });
      }
    },
    75432: (e, t, r) => {
      "use strict";
      r.d(t, { TokenProvider: () => m, r: () => h });
      var a = r(95155),
        s = r(12115),
        n = r(53031),
        i = r(2145),
        l = r(50090),
        o = r(61046),
        c = r(54332);
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
      function x(e, t) {
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
      let p = (0, s.createContext)(void 0);
      function m(e) {
        var t;
        let { children: r } = e,
          [m, h] = (0, s.useReducer)(x, d),
          u = (0, n.U)(),
          { address: f } = (0, i.F)(),
          { setReferralCode: g } = (0, c.T)(),
          b = async () => {
            h({ type: "SET_LOADING", payload: !0 });
            try {
              let e = await fetch(
                  "".concat(
                    "https://app.ozakai.xyz",
                    "/api/v2/oz/get-presale-stats"
                  )
                ),
                { data: t } = await e.json(),
                r = parseFloat(t.tokensAllocated) - parseFloat(t.tokensSold),
                a = {
                  phase: parseInt(t.currentPhase),
                  totalOzSold: parseFloat(t.tokensSold).toLocaleString(),
                  remaining: r.toLocaleString(),
                  ozPrice: t.currentPrice,
                  nextPhaseTarget: 0.01,
                  targetPrice: 1,
                  totalRaised: t.usdRaisedSoFar.toLocaleString(),
                  stageEnded: t.stageEnded,
                };
              JSON.stringify(m.tokenData) !== JSON.stringify(a) &&
                h({ type: "SET_TOKEN_DATA", payload: a }),
                h({ type: "SET_LOADING", payload: !1 });
            } catch (e) {
              h({ type: "SET_ERROR", payload: "Failed to fetch token data" }),
                h({ type: "SET_LOADING", payload: !1 });
            }
          },
          F = async () => {
            try {
              let e = await fetch(
                  ""
                    .concat("https://app.ozakai.xyz", "/user/referral-code/")
                    .concat(f)
                ),
                { referralCode: t } = await e.json();
              g(t);
            } catch (e) {
              console.error(e);
            }
          },
          v = (0, s.useMemo)(() => {
            var e;
            if (
              !m.enterAmount ||
              !(null == (e = m.tokenData) ? void 0 : e.ozPrice) ||
              isNaN(Number(m.enterAmount))
            )
              return "0";
            let t = Number(m.enterAmount),
              r = m.tokenData.ozPrice,
              a = (0, l.yP)(m.selectedCurrency),
              s = 0;
            return ((a === o.Xd ? t * m.ethPrice : t) / r).toLocaleString(
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
            b();
            let e = setInterval(() => {
              b();
            }, 3e4);
            return () => clearInterval(e);
          }, []),
          (0, s.useEffect)(() => {
            (async () => {
              if (f && u) {
                let e = await (0, l.bq)(u, f);
                "number" == typeof e &&
                  h({ type: "SET_ETH_PRICE", payload: e }),
                  F();
              }
            })();
          }, [f, u]),
          (0, s.useEffect)(() => {
            let e = async () => {
              if (f) {
                let e = (0, l.yP)(m.selectedCurrency);
                h({
                  type: "SET_WALLET_BALANCE",
                  payload: Number(await (0, l.kb)(u, m.selectedCurrency, f, e)),
                });
              }
            };
            f && e();
          }, [f, m.selectedCurrency, u]),
          (0, a.jsx)(p.Provider, {
            value: {
              state: m,
              dispatch: h,
              calculateOzReceived: v,
              fetchTokenData: b,
              setTransactionHash: (e) => {
                h({ type: "SET_TRANSACTION_HASH", payload: e });
              },
            },
            children: r,
          })
        );
      }
      function h() {
        let e = (0, s.useContext)(p);
        if (void 0 === e)
          throw Error("useToken must be used within a TokenProvider");
        return e;
      }
    },
    86164: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => l });
      var a = r(95155),
        s = r(66766),
        n = r(6874),
        i = r.n(n);
      function l(e) {
        let { href: t = "https://t.me/yourusername", onClick: r } = e,
          n = (0, a.jsxs)("div", {
            className: "group relative",
            children: [
              (0, a.jsx)("div", {
                className:
                  "relative w-18 h-18 lg:w-[86px] lg:h-[86px] rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer",
                children: (0, a.jsx)(s.default, {
                  src: "/images/sticky-telegram-icon.png",
                  alt: "Join us on Telegram",
                  fill: !0,
                  className: "object-cover",
                  sizes:
                    "(max-width: 640px) 72px, (max-width: 768px) 66px, (max-width: 1024px) 86px",
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "absolute right-full mr- top-1/2 -translate-y-1/2 tooltip-bg border-1 border-[#FFFFFF33] text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap",
                children: [
                  "Join us on Telegram",
                  (0, a.jsx)("div", {
                    className:
                      "absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900",
                  }),
                ],
              }),
            ],
          }),
          l =
            "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50";
        return t
          ? (0, a.jsx)(i(), {
              href: t,
              className: l,
              target: "_blank",
              rel: "noopener noreferrer",
              children: n,
            })
          : (0, a.jsx)("button", { onClick: r, className: l, children: n });
      }
    },
    97107: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => j });
      var a = r(95155),
        s = r(12115),
        n = r(64315),
        i = r(51013),
        l = r(27859),
        o = r(93347),
        c = r(6874),
        d = r.n(c),
        x = r(66766),
        p = r(35695),
        m = r(51235),
        h = r(11906),
        u = r(15305),
        f = r(75432);
      let g = [
          { code: "EN", name: "English", icon: "/icons/uk-flag.svg" },
          { code: "FR", name: "Fran\xe7ais", icon: "/icons/france-flag.svg" },
          { code: "ZH", name: "中文", icon: "/icons/china-flag.svg" },
          { code: "DE", name: "Deutsch", icon: "/icons/deutsch-flag.svg" },
          { code: "AR", name: "Arabic", icon: "/icons/arab-flag.svg" },
          { code: "JA", name: "Japanese", icon: "/icons/japan-flag.svg" },
        ],
        b = [
          { name: "Dashboard", href: "/dashboard" },
          { name: "Predictive AI", href: "/predictive-ai" },
          { name: "Socials", href: "#", hasDropdown: !0 },
        ],
        F = [
          { name: "Tokenomics", href: "/dashboard#tokenomics" },
          {
            name: "Whitepaper",
            href: "".concat("https://ozakai.xyz", "/Ozak AI whitepaper V 1.0.pdf"),
            blank: !0,
          },
          { name: "Referrals", href: "/dashboard#referrals" },
          { name: "FAQs", href: "/dashboard#faqs" },
        ],
        v = [
          { name: "Telegram", href: "http://t.me/ozakai_chat", icon: o.e1t },
          { name: "X (Twitter)", href: "https://x.com/0zak_aiX", icon: n.TCj },

        ],
        w = [
          { icon: n.TCj, href: "https://x.com/0zak_aiX", label: "Twitter" },
          { icon: o.e1t, href: "https://t.me/ozakai_chat", label: "Telegram" },
        ];
      function j() {
        var e, t, r;
        let { state: c } = (0, f.r)(),
          { isConnected: j, address: k } = (0, m.G8)(),
          { open: N } = (0, m.JS)(),
          [y, A] = (0, s.useState)(!1),
          [C, _] = (0, s.useState)(!1),
          [E, T] = (0, s.useState)(!1),
          [z, D] = (0, s.useState)(!1),
          [S, P] = (0, s.useState)("EN"),
          [I, O] = (0, s.useState)(!1),
          R = (0, p.usePathname)(),
          L = (0, s.useRef)(null),
          G = (0, s.useRef)(null),
          B = (0, s.useRef)(null),
          H = (0, s.useRef)(null),
          J = (0, s.useRef)(null),
          W = (0, s.useRef)(null),
          q = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
          let e = () => {
            O(window.scrollY > 80);
          };
          return (
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, []),
          (0, s.useEffect)(() => {
            let e = (e) => {
              let t = e.target;
              G.current &&
                !G.current.contains(t) &&
                B.current &&
                !B.current.contains(t) &&
                _(!1),
                (H.current && H.current.contains(t)) ||
                  (J.current && J.current.contains(t)) ||
                  T(!1),
                (W.current && W.current.contains(t)) ||
                  (q.current && q.current.contains(t)) ||
                  D(!1),
                L.current && !L.current.contains(t) && A(!1);
            };
            return (
              document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, []),
          (0, s.useEffect)(
            () => (
              y
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "unset"),
              () => {
                document.body.style.overflow = "unset";
              }
            ),
            [y]
          );
        let V = (e) => {
            let t = window;
            t.Weglot && t.Weglot.switchTo(e.toLocaleLowerCase()), P(e), _(!1);
          },
          U = () => {
            _(!C);
          },
          $ = () => {
            T(!E);
          },
          Z = () => {
            T(!1);
          },
          X = () => {
            D(!z);
          },
          M = () => {
            D(!1);
          },
          K = () => {
            N(), A(!1);
          },
          Q = () => {
            N({ view: "Account" }), A(!1);
          },
          Y = (e) => "".concat(e.slice(0, 6), "...").concat(e.slice(-6));
        return (0, a.jsxs)("nav", {
          className: "z-50 fixed top-0 left-0 w-full",
          children: [
            (0, a.jsx)("div", {
              className:
                "bg-[#1D1E1C] text-white md:h-[34px] p-[6px] xl:p-[10px] flex items-center justify-center text-[10px] md:text-[12px] xl:text-[14px] font-medium tracking-[-0.28px] uppercase relative",
              children: [],
            }),
            (0, a.jsxs)("div", {
              className: "".concat(
                I ? "bg-white/5 backdrop-blur-md" : "bg-transparent"
              ),
              children: [
                (0, a.jsx)("div", {
                  className:
                    "container mx-auto lg:h-[80px] p-4 lg:px-[50px] xl:px-[100px] ",
                  children: (0, a.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, a.jsx)("div", {
                        className: "lg:hidden",
                        children: (0, a.jsx)("button", {
                          onClick: () => {
                            A(!y);
                          },
                          className:
                            "text-white p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200",
                          "aria-label": "Toggle mobile menu",
                          children: y
                            ? (0, a.jsx)(i.$8F, { className: "w-6 h-6" })
                            : (0, a.jsx)(l.lv5, { className: "w-6 h-6" }),
                        }),
                      }),
                      (0, a.jsx)(d(), {
                        href: "/",
                        className: "flex items-center cursor-pointer",
                        children: (0, a.jsx)("div", {
                          className: "w-[158.502px] h-[35px] relative",
                          children: (0, a.jsx)(x.default, {
                            src: "/images/logo-full.svg",
                            alt: "OZAK AI Logo",
                            fill: !0,
                            style: { objectFit: "contain" },
                            priority: !0,
                          }),
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "hidden lg:flex items-center space-x-5 2xl:space-x-8 lg:ml-10 xl:ml-24",
                        children: b.map((e) => {
                          let t =
                            ("Presale" === e.name &&
                              ("/" === R || "/dashboard" === R)) ||
                            R === e.href;
                          return e.hasDropdown && "Resources" === e.name
                            ? (0, a.jsxs)(
                                "div",
                                {
                                  className: "relative cursor-pointer",
                                  ref: H,
                                  children: [
                                    (0, a.jsxs)("button", {
                                      onClick: $,
                                      className:
                                        "flex items-center space-x-2 lg:text-[14px] xl:text-[16px] leading-[24px] tracking-[-0.36px] cursor-pointer ".concat(
                                          t || E
                                            ? "text-[#FFFFFF] font-medium"
                                            : "text-[#999A99] hover:text-[#FFFFFF] font-normal"
                                        ),
                                      children: [
                                        (0, a.jsx)("span", {
                                          children: e.name,
                                        }),
                                        (0, a.jsx)(n.Vr3, {
                                          className:
                                            "lg:w-2.5 xl:w-3 lg:h-2.5 xl:h-3 transition-transform duration-200 ".concat(
                                              E ? "rotate-180" : ""
                                            ),
                                        }),
                                      ],
                                    }),
                                    E &&
                                      (0, a.jsxs)("div", {
                                        className: "absolute ".concat(
                                          I
                                            ? "bg-[#1D1E1C]"
                                            : "backdrop-blur-[57px] bg-[rgba(82,82,82,0.1)] border border-white/20 shadow-[inset_-3px_-1px_14px_rgba(255,255,255,0.1)] rounded-[22px]",
                                          " top-full left-0 mt-2 w-[224px] border border-[#FFFFFF33] rounded-[20px] px-[22px] py-[24px] z-50"
                                        ),
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: "space-y-[18px]",
                                            children: F.map((e) =>
                                              (0, a.jsx)(
                                                d(),
                                                {
                                                  href: e.href,
                                                  target: e.blank
                                                    ? "_blank"
                                                    : "",
                                                  onClick: Z,
                                                  className:
                                                    "block text-[#FFFFFF99] hover:text-white transition-colors duration-200 text-[17px] tracking-[-0.68px] font-normal",
                                                  children: e.name,
                                                },
                                                e.name
                                              )
                                            ),
                                          }),
                                          (0, a.jsx)("div", {
                                            className:
                                              "flex items-center justify-center gap-3 mt-6 pt-4 border-t border-[#FFFFFF1A]",
                                            children: w.map((e, t) =>
                                              (0, a.jsx)(
                                                d(),
                                                {
                                                  href: e.href,
                                                  target: "_blank",
                                                  rel: "noopener noreferrer",
                                                  className:
                                                    "text-[#AFAFAF] hover:text-white transition-colors duration-200 rounded-full border border-[#FFFFFF0D] bg-[#FFFFFF05] flex items-center justify-center w-[36px] h-[36px]",
                                                  "aria-label": e.label,
                                                  children: e.isImage
                                                    ? (0, a.jsx)("img", {
                                                        src: e.icon,
                                                        className: "w-4 h-4",
                                                        alt: e.label,
                                                      })
                                                    : (0, a.jsx)(e.icon, {
                                                        className: "w-4 h-4",
                                                      }),
                                                },
                                                t
                                              )
                                            ),
                                          }),
                                        ],
                                      }),
                                  ],
                                },
                                e.name
                              )
                            : e.hasDropdown && "Socials" === e.name
                            ? (0, a.jsxs)(
                                "div",
                                {
                                  className: "relative cursor-pointer",
                                  ref: W,
                                  children: [
                                    (0, a.jsxs)("button", {
                                      onClick: X,
                                      className:
                                        "flex items-center space-x-2 lg:text-[14px] xl:text-[16px] leading-[24px] tracking-[-0.36px] cursor-pointer ".concat(
                                          t || z
                                            ? "text-[#FFFFFF] font-medium"
                                            : "text-[#999A99] hover:text-[#FFFFFF] font-normal"
                                        ),
                                      children: [
                                        (0, a.jsx)("span", {
                                          children: e.name,
                                        }),
                                        (0, a.jsx)(n.Vr3, {
                                          className:
                                            "lg:w-2.5 xl:w-3 lg:h-2.5 xl:h-3 transition-transform duration-200 ".concat(
                                              z ? "rotate-180" : ""
                                            ),
                                        }),
                                      ],
                                    }),
                                    z &&
                                      (0, a.jsx)("div", {
                                        className: "absolute ".concat(
                                          I
                                            ? "bg-[#1D1E1C]"
                                            : "backdrop-blur-[57px] bg-[rgba(82,82,82,0.1)] border border-white/20 shadow-[inset_-3px_-1px_14px_rgba(255,255,255,0.1)] rounded-[22px]",
                                          " top-full left-0 mt-2 w-[214px] border border-[#FFFFFF33] rounded-[22px] px-[21px] py-[31px] z-50"
                                        ),
                                        children: (0, a.jsx)("div", {
                                          className: "space-y-[12px]",
                                          children: v.map((e) =>
                                            (0, a.jsxs)(
                                              d(),
                                              {
                                                href: e.href,
                                                target: "_blank",
                                                onClick: M,
                                                className:
                                                  "flex items-center gap-[11px] text-[#FFFFFF99] hover:text-white transition-colors duration-200 text-[17px] tracking-[-0.68px] font-normal",
                                                children: [
                                                  e.isImage
                                                    ? (0, a.jsx)("div", {
                                                        className:
                                                          "flex items-center justify-center gap-[9px] w-[34px] h-[34px] bg-[#FFFFFF05] border border-[#FFFFFF0D] rounded-full",
                                                        children: (0, a.jsx)(
                                                          "img",
                                                          {
                                                            src: e.icon,
                                                            className:
                                                              "w-4 h-4",
                                                            alt: e.name,
                                                          }
                                                        ),
                                                      })
                                                    : (0, a.jsx)("div", {
                                                        className:
                                                          "flex items-center justify-center gap-[9px] w-[34px] h-[34px] bg-[#FFFFFF05] border border-[#FFFFFF0D] rounded-full",
                                                        children: (0, a.jsx)(
                                                          e.icon,
                                                          {
                                                            className:
                                                              "w-4 h-4",
                                                          }
                                                        ),
                                                      }),
                                                  e.name,
                                                ],
                                              },
                                              e.name
                                            )
                                          ),
                                        }),
                                      }),
                                  ],
                                },
                                e.name
                              )
                            : (0, a.jsx)(
                                d(),
                                {
                                  href: e.href,
                                  className:
                                    "transition-colors duration-200 lg:text-[14px] xl:text-[16px] leading-[24px] tracking-[-0.36px] ".concat(
                                      t
                                        ? "text-[#FFFFFF] font-medium"
                                        : "text-[#999A99] hover:text-[#FFFFFF] font-normal"
                                    ),
                                  children: e.name,
                                },
                                e.name
                              );
                        }),
                      }),
                      
                      (0, a.jsxs)("div", {
                        className: "lg:hidden relative",
                        ref: B,
                        children: [
                          (0, a.jsx)("button", {
                            onClick: U,
                            className:
                              "flex items-center justify-center space-x-1.5 text-[#FFFFFF99] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded",
                            children: (0, a.jsx)(n.f35, {
                              className: "w-5 h-5",
                            }),
                          }),
                          C &&
                            (0, a.jsx)("div", {
                              className:
                                "absolute top-full right-0 mt-2 w-[160px] ".concat(
                                  I
                                    ? "bg-[#1D1E1C]"
                                    : "backdrop-blur-[57px] bg-[rgba(82,82,82,0.1)] border border-white/20 shadow-[inset_-3px_-1px_14px_rgba(255,255,255,0.1)] rounded-[22px]",
                                  " rounded-[22px] py-2 z-50"
                                ),
                              children: g.map((e) =>
                                (0, a.jsxs)(
                                  "button",
                                  {
                                    onClick: () => V(e.code),
                                    className:
                                      "w-full flex items-center justify-between text-left px-4 py-2 text-sm transition-colors duration-200 text-white",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center gap-[11px]",
                                        children: [
                                          (0, a.jsx)(x.default, {
                                            src: e.icon,
                                            alt: e.name,
                                            width: 14,
                                            height: 14,
                                          }),
                                          e.name,
                                        ],
                                      }),
                                      S === e.code &&
                                        (0, a.jsx)(x.default, {
                                          src: "/icons/check.svg",
                                          alt: "Check",
                                          width: 18,
                                          height: 18,
                                        }),
                                    ],
                                  },
                                  e.code
                                )
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
                y &&
                  (0, a.jsx)("div", {
                    ref: L,
                    className: "lg:hidden ".concat(
                      I
                        ? "bg-[#1D1E1C]"
                        : "backdrop-blur-[57px] bg-[rgba(82,82,82,0.1)] border border-white/20 shadow-[inset_-3px_-1px_14px_rgba(255,255,255,0.1)] rounded-[22px]",
                      " rounded-[22px] mx-[21px] border border-[#FFFFFF33]"
                    ),
                    children: (0, a.jsxs)("div", {
                      className: "p-6 space-y-[18px]",
                      children: [
                        b.map((e) => {
                          let t =
                            ("Presale" === e.name &&
                              ("/" === R || "/dashboard" === R)) ||
                            R === e.href;
                          return e.hasDropdown && "Resources" === e.name
                            ? (0, a.jsxs)(
                                "div",
                                {
                                  className: "space-y-4",
                                  ref: J,
                                  children: [
                                    (0, a.jsxs)("button", {
                                      onClick: $,
                                      className:
                                        "flex items-center justify-center space-x-2 w-full text-[20px] tracking-[-0.8px] font-normal cursor-pointer text-[#999A99]",
                                      children: [
                                        (0, a.jsx)("span", {
                                          children: e.name,
                                        }),
                                        (0, a.jsx)(n.Vr3, {
                                          className:
                                            "w-3 h-3 transition-transform duration-200 ".concat(
                                              E ? "rotate-180" : ""
                                            ),
                                        }),
                                      ],
                                    }),
                                    E &&
                                      (0, a.jsx)("div", {
                                        className:
                                          "backdrop-blur-[57px] bg-[rgba(82,82,82,0.1)]  shadow-[inset_-3px_-1px_14px_rgba(255,255,255,0.1)] rounded-[22px] border border-[#FFFFFF1A] p-4 space-y-1",
                                        children: F.map((e) =>
                                          (0, a.jsx)(
                                            d(),
                                            {
                                              href: e.href,
                                              target: e.blank ? "_blank" : "",
                                              onClick: () => {
                                                A(!1), T(!1);
                                              },
                                              className:
                                                "block text-center text-[16px] tracking-[-0.32px] font-normal text-white transition-colors duration-200 py-2",
                                              children: e.name,
                                            },
                                            e.name
                                          )
                                        ),
                                      }),
                                  ],
                                },
                                e.name
                              )
                            : e.hasDropdown && "Socials" === e.name
                            ? (0, a.jsxs)(
                                "div",
                                {
                                  className: "space-y-4",
                                  ref: q,
                                  children: [
                                    (0, a.jsxs)("button", {
                                      onClick: X,
                                      className:
                                        "flex items-center justify-center w-full space-x-2 text-[20px] tracking-[-0.8px] cursor-pointer text-[#999A99]",
                                      children: [
                                        (0, a.jsx)("span", {
                                          children: e.name,
                                        }),
                                        (0, a.jsx)(n.Vr3, {
                                          className:
                                            "w-3 h-3 transition-transform duration-200 ".concat(
                                              z ? "rotate-180" : ""
                                            ),
                                        }),
                                      ],
                                    }),
                                    z &&
                                      (0, a.jsx)("div", {
                                        className:
                                          "backdrop-blur-[57px] bg-[rgba(82,82,82,0.1)] shadow-[inset_-3px_-1px_14px_rgba(255,255,255,0.1)] rounded-[22px] border border-[#FFFFFF33] p-4 space-y-1 z-50",
                                        children: v.map((e) =>
                                          (0, a.jsxs)(
                                            d(),
                                            {
                                              href: e.href,
                                              target: "_blank",
                                              onClick: M,
                                              className:
                                                "flex items-center gap-[11px] text-white transition-colors duration-200 text-[18px] tracking-[-0.68px] font-normal",
                                              children: [
                                                e.isImage
                                                  ? (0, a.jsx)("div", {
                                                      className:
                                                        "flex items-center justify-center gap-[9px] w-[34px] h-[34px] bg-[#FFFFFF05] border border-[#FFFFFF0D] rounded-full",
                                                      children: (0, a.jsx)(
                                                        "img",
                                                        {
                                                          src: e.icon,
                                                          className: "w-4 h-4",
                                                          alt: e.name,
                                                        }
                                                      ),
                                                    })
                                                  : (0, a.jsx)("div", {
                                                      className:
                                                        "flex items-center justify-center gap-[9px] w-[34px] h-[34px] bg-[#FFFFFF05] border border-[#FFFFFF0D] rounded-full",
                                                      children: (0, a.jsx)(
                                                        e.icon,
                                                        { className: "w-4 h-4" }
                                                      ),
                                                    }),
                                                e.name,
                                              ],
                                            },
                                            e.name
                                          )
                                        ),
                                      }),
                                  ],
                                },
                                e.name
                              )
                            : (0, a.jsx)(
                                d(),
                                {
                                  href: e.href,
                                  onClick: () => A(!1),
                                  className:
                                    "block w-full text-center text-[20px] tracking-[-0.8px] font-normal transition-all duration-200 ".concat(
                                      t
                                        ? "text-[#FFFFFF] font-medium"
                                        : "text-[#999A99]"
                                    ),
                                  children: e.name,
                                },
                                e.name
                              );
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center justify-center gap-3",
                          children: [
                            (0, a.jsx)(d(), {
                              href: "https://x.com/0zak_aiX",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "text-[#AFAFAF] hover:text-white transition-colors rounded-full border border-[#FFFFFF0D] bg-[#FFFFFF05] flex items-center justify-center w-[46px] h-[46px]",
                              children: (0, a.jsx)(n.TCj, {
                                className: "w-5 h-5",
                              }),
                            }),
                            (0, a.jsx)(d(), {
                              href: "https://t.me/ozakai_chat",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "text-[#AFAFAF] hover:text-white transition-colors rounded-full border border-[#FFFFFF0D] bg-[#FFFFFF05] flex items-center justify-center w-[46px] h-[46px]",
                              children: (0, a.jsx)(o.e1t, {
                                className: "w-5 h-5",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "flex items-center justify-center",
                          children: (0, a.jsx)("a", {
                            href: "https://app.ozakai.xyz",
                            target: "_blank",
                            onClick: () => A(!1),
                            className:
                              "text-[#A6FF00] border-1 border-[#A6FF00] w-full text-[20px] tracking-[-0.4px] flex items-center justify-center px-6 py-2 font-semibold transition-all duration-200 transform rounded-[42px]",
                            children: "Dashboard",
                          }),
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          ],
        });
      }
    },
    97748: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => a });
      let a = (0, r(17199).U)([
        "function buyTokens(address tokenAddress, uint256 usdAmount, address referrer)",
        "function buyTokensETH(address referrer) payable",
        "function getLatestPrice() returns (uint256)",
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(
      0,
      [
        6359, 5897, 9204, 512, 6446, 8087, 3873, 6874, 3063, 2971, 4134, 6155,
        5382, 9603, 8441, 1684, 7358,
      ],
      () => t(50522)
    ),
      (_N_E = e.O());
  },
]);
