(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1394],
  {
    8839: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => h });
      var s = a(95155),
        l = a(12115),
        r = a(2145),
        i = a(51235),
        n = a(30285),
        c = a(5196),
        o = a(24357),
        x = a(54332),
        d = a(43145),
        p = a(54416);
      let m = (e) => {
        let { open: t, onClose: a } = e,
          [r, i] = (0, l.useState)(!1),
          { referralCode: n } = (0, x.T)(),
          o = n
            ? "".concat("https://app.ozakai.xyz", "/buy?ref=").concat(n)
            : null,
          d = async () => {
            try {
              o && (await navigator.clipboard.writeText(o)),
                i(!0),
                setTimeout(() => i(!1), 2e3);
            } catch (e) {
              console.error("Failed to copy link:", e);
            }
          },
          m = (e) => {
            let t = "Join me on OZAK AI and get bonus rewards!",
              a = o || "";
            switch (e) {
              case "telegram":
                window.open(
                  "https://telegram.me/share/url?url="
                    .concat(encodeURIComponent(a), "&text=")
                    .concat(encodeURIComponent(t)),
                  "_blank"
                );
                break;
              case "whatsapp":
                window.open(
                  "https://api.whatsapp.com/send?text=".concat(
                    encodeURIComponent(t + " " + a)
                  ),
                  "_blank"
                );
                break;
              case "facebook":
                window.open(
                  "https://www.facebook.com/sharer/sharer.php?u=".concat(
                    encodeURIComponent(a)
                  ),
                  "_blank"
                );
                break;
              case "twitter":
                window.open(
                  "https://twitter.com/intent/tweet?text="
                    .concat(encodeURIComponent(t), "&url=")
                    .concat(encodeURIComponent(a)),
                  "_blank"
                );
                break;
              case "instagram":
                d();
                break;
              case "email":
                window.open(
                  "mailto:?subject="
                    .concat(encodeURIComponent("Join OZAK AI"), "&body=")
                    .concat(encodeURIComponent(t + "\n\n" + a)),
                  "_blank"
                );
            }
          };
        return t
          ? (0, s.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50 m-4 md:m-0 backdrop-blur-sm",
              children: (0, s.jsxs)("div", {
                className:
                  "relative w-full max-w-[498px] mx-auto p-4 md:px-6 md:py-[50px] success-modal-bg",
                children: [
                  (0, s.jsx)("button", {
                    onClick: a,
                    className:
                      "absolute top-6 right-6 text-white/50 hover:text-white cursor-pointer transition-colors",
                    children: (0, s.jsx)(p.A, { size: 24 }),
                  }),
                  (0, s.jsx)("div", {
                    className: "flex justify-center mb-2",
                    children: (0, s.jsx)("div", {
                      className: "flex items-center gap-2",
                      children: (0, s.jsx)("img", {
                        src: "/images/dashboard/tokens-merge.svg",
                        alt: "OZAK AI",
                        className: "w-[175.533px] h-[52px] object-contain",
                      }),
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "text-center mb-[36px]",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "text-[18px] md:text-[24px] font-semibold leading-[27px] md:leading-[30px] tracking-[-0.36px] md:tracking-[-0.48px] text-white ",
                        children: (0, s.jsxs)("h2", {
                          className: "mb-2",
                          children: [
                            "Refer & Earn MEGA Reward of",
                            (0, s.jsx)("span", {
                              className: "text-[#A6FF00]",
                              children: " 10% $OZ",
                            }),
                            " ",
                            (0, s.jsx)("span", {
                              className: "text-white",
                              children: "on every referral.",
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)("p", {
                        className:
                          "text-[12px] md:text-[14px] text-[#AFAFAF] font-normal leading-[20px] tracking-[-0.24px] md:tracking-[-0.28px]",
                        children:
                          "Share your unique code with your friends & earn 10% of their purchase amount in $OZ instantly! Share More to Earn More.",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "space-y-4 md:space-y-[36px]",
                    children: [
                      (0, s.jsx)("div", {
                        className: "relative",
                        children: (0, s.jsx)("div", {
                          className: "social-box-bg px-3 py-3 md:py-[13px]",
                          children: (0, s.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, s.jsxs)("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  (0, s.jsx)("p", {
                                    className:
                                      "text-[#A6FF00] text-[12px] md:text-[16px] font-normal leading-[18px] md:leading-[24px] mb-0.5",
                                    children: "Your Referral Link",
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "bg-text-gradient-white text-[10px] md:text-[16px] font-semibold leading-[15px] md:leading-[24px] truncate",
                                    children: o,
                                  }),
                                ],
                              }),
                              (0, s.jsx)("button", {
                                onClick: d,
                                className:
                                  "ml-3 p-2.5 bg-white rounded-full transition-colors cursor-pointer",
                                children: r
                                  ? (0, s.jsx)(c.A, {
                                      size: 20,
                                      className: "text-black",
                                    })
                                  : (0, s.jsx)("img", {
                                      src: "/icons/copy-black.svg",
                                      alt: "Copy",
                                    }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "text-center",
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "text-white text-[14px] md:text-[16px] font-normal leading-[18px] md:leading-[22px] tracking-[-0.28px] md:tracking-[-0.32px] mb-4",
                            children: "Share directly on your socials",
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex justify-center gap-[22px]",
                            children: [
                              (0, s.jsx)("button", {
                                onClick: () => m("telegram"),
                                className:
                                  "w-7.5 md:w-10 h-7.5 md:h-10 bg-[#FFFFFF1A] rounded-full flex items-center justify-center cursor-pointer",
                                children: (0, s.jsx)("img", {
                                  src: "/icons/telegram-active-bg.svg",
                                  className:
                                    "w-[18px] md:w-[24px] h-[18px] md:h-[24px]",
                                  alt: "Telegram",
                                }),
                              }),
                              (0, s.jsx)("button", {
                                onClick: () => m("whatsapp"),
                                className:
                                  "w-7.5 md:w-10 h-7.5 md:h-10 bg-[#FFFFFF1A] rounded-full flex items-center justify-center cursor-pointer",
                                children: (0, s.jsx)("img", {
                                  src: "/icons/whatsapp-active.svg",
                                  className:
                                    "w-[18px] md:w-[24px] h-[18px] md:h-[24px]",
                                  alt: "WhatsApp",
                                }),
                              }),
                              (0, s.jsx)("button", {
                                onClick: () => m("facebook"),
                                className:
                                  "w-7.5 md:w-10 h-7.5 md:h-10 bg-[#FFFFFF1A] rounded-full flex items-center justify-center cursor-pointer",
                                children: (0, s.jsx)("img", {
                                  src: "/icons/facebook-active.svg",
                                  className:
                                    "w-[18px] md:w-[24px] h-[18px] md:h-[24px]",
                                  alt: "Facebook",
                                }),
                              }),
                              (0, s.jsx)("button", {
                                onClick: () => m("twitter"),
                                className:
                                  "w-7.5 md:w-10 h-7.5 md:h-10 bg-[#FFFFFF1A] rounded-full flex items-center justify-center cursor-pointer",
                                children: (0, s.jsx)("img", {
                                  src: "/icons/twitter-active-bg.svg",
                                  className:
                                    "w-[18px] md:w-[24px] h-[18px] md:h-[24px]",
                                  alt: "X",
                                }),
                              }),
                              (0, s.jsx)("button", {
                                onClick: () => m("instagram"),
                                className:
                                  "w-7.5 md:w-10 h-7.5 md:h-10 bg-[#FFFFFF1A] rounded-full flex items-center justify-center cursor-pointer",
                                children: (0, s.jsx)("img", {
                                  src: "/icons/instagram-active.svg",
                                  className:
                                    "w-[18px] md:w-[24px] h-[18px] md:h-[24px]",
                                  alt: "Instagram",
                                }),
                              }),
                              (0, s.jsx)("button", {
                                onClick: () => m("email"),
                                className:
                                  "w-7.5 md:w-10 h-7.5 md:h-10 bg-[#FFFFFF1A] rounded-full flex items-center justify-center cursor-pointer",
                                children: (0, s.jsx)("img", {
                                  src: "/icons/mail-active.svg",
                                  className:
                                    "w-[18px] md:w-[24px] h-[18px] md:h-[24px]",
                                  alt: "Email",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          : null;
      };
      function h() {
        let { isConnected: e } = (0, r.F)(),
          { open: t } = (0, i.JS)(),
          [a, p] = (0, l.useState)(!1),
          { referralCode: h } = (0, x.T)(),
          [f, u] = (0, l.useState)(!1),
          g = async () => {
            try {
              if (!h) return;
              await navigator.clipboard.writeText(h),
                (0, d.HM)(),
                p(!0),
                setTimeout(() => p(!1), 2e3);
            } catch (e) {
              console.error("Failed to copy text: ", e);
            }
          },
          b = async () => {
            h && u(!0);
          },
          w = () => {
            t();
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              id: "referrals",
              className:
                "mx-auto container flex flex-col lg:flex-row md:items-center md:text-center lg:text-left justify-between bg-black mt-[30px] mb-[30px] md:mt-0 md:mb-[60px] px-4 md:px-6 lg:px-[50px] xl:px-[100px]",
              children: [
                (0, s.jsxs)("div", {
                  className: "space-y-6 md:space-y-8",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "text-center md:text-left space-y-3 lg:space-y-6",
                      children: [
                        (0, s.jsxs)("h1", {
                          className:
                            "text-white text-[24px] md:text-[46px] lg:text-[58px] font-semibold md:leading-[54px] xl:leading-[74px] tracking-[-0.48px] md:tracking-[-0.92px] xl:tracking-[-1.16px]",
                          children: [
                            "Refer & Earn 10%",
                            (0, s.jsx)("br", {}),
                            "with Ozak AI",
                          ],
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-[#adadad] text-[14px] md:text-[16px] lg:text-[18px] leading-[1.2] md:leading-[31px] xl:leading-[24px] tracking-[-0.28px] md:tracking-[-0.32px] xl:tracking-[-0.36px] max-w-lg",
                          children:
                            "Each Purchase from your referral earns you 10% bonus. SHare more to Earn more.",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "w-full md:max-w-[433.28px] xl:max-w-[636px]",
                  children: (0, s.jsx)("div", {
                    className:
                      "relative w-[280px] h-[280px] md:w-[433.28px] md:h-[410.28px] xl:w-[636px] xl:h-[550.5px] mx-auto md:mx-0",
                    children: (0, s.jsxs)("video", {
                      autoPlay: !0,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className:
                        "object-contain w-full h-full absolute inset-0",
                      poster: "/images/dashboard/vault.png",
                      children: [
                        (0, s.jsx)("source", {
                          src: "/videos/vault.webm",
                          type: "video/webm",
                        }),
                        "Your browser does not support the video tag.",
                      ],
                    }),
                  }),
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row lg:hidden gap-4 items-center lg:items-start justify-center lg:justify-start",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "w-[247px] md:w-full flex items-center gap-3 black-gradient-button-2 px-[20px] py-[16px] min-w-0",
                      children: [
                        (0, s.jsxs)("span", {
                          className:
                            "text-white font-medium text-[14px] md:text-[20px] leading-[27px] tracking-[-0.28px] md:tracking-[-0.4px]",
                          children: [
                            "Referral code: ",
                            e ? h : "Not Available",
                          ],
                        }),
                        e &&
                          (0, s.jsx)(n.$, {
                            variant: "ghost",
                            size: "icon",
                            onClick: g,
                            className:
                              "h-6 w-6 text-white hover:text-[#a6ff00] hover:bg-transparent p-0 cursor-pointer",
                            children: a
                              ? (0, s.jsx)(c.A, { className: "h-4 w-4" })
                              : (0, s.jsx)(o.A, { className: "h-4 w-4" }),
                          }),
                      ],
                    }),
                    e
                      ? (0, s.jsx)("button", {
                          onClick: b,
                          className:
                            "green-gradient-button w-[247px] md:w-fit flex items-center justify-center text-[#000000] font-semibold px-[20px] py-[10px] md:py-[16px] text-[20px] leading-[27px] tracking-[-0.4px] cursor-pointer",
                          children: "Share",
                        })
                      : (0, s.jsx)("button", {
                          onClick: w,
                          className:
                            "flex-1 text-[#A6FF00] border-1 border-[#A6FF00] rounded-[42px] px-[42px] py-[14px] text-[20px] font-semibold tracking-[-0.44px] transition-all cursor-pointer",
                          children: "Connect Wallet",
                        }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(m, { open: f, onClose: () => u(!1) }),
          ],
        });
      }
    },
    30285: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => c, r: () => n });
      var s = a(95155),
        l = a(41674),
        r = a(99708),
        i = a(74466);
      a(12115);
      let n = (0, i.F)(
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
        c = (e) => {
          let {
              asChild: t = !1,
              className: a,
              size: i,
              variant: c,
              ref: o,
              ...x
            } = e,
            d = t ? r.DX : "button";
          return (0, s.jsx)(d, {
            className: (0, l.cn)(n({ className: a, size: i, variant: c })),
            ref: o,
            ...x,
          });
        };
    },
    31255: (e, t, a) => {
      "use strict";
      a.d(t, { G$: () => l, X8: () => r, rx: () => s });
      let s = "0xComingSoon",
        l = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        r = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    },
    40137: (e, t, a) => {
      "use strict";
      a.d(t, { AppKitProvider: () => h });
      var s = a(95155),
        l = a(51235),
        r = a(48374),
        i = a(93151),
        n = a(87017),
        c = a(26715),
        o = a(85894);
      let x = new n.E(),
        d = "4d641d7b4f2ca691972400f7604cc314";
      if (!d) throw Error("Project ID not set");
      let p = [i.rCZ],
        m = new o.D({ networks: p, projectId: d, ssr: !0 });
      function h(e) {
        let { children: t } = e;
        return (0, s.jsx)(r.x, {
          config: m.wagmiConfig,
          children: (0, s.jsx)(c.Ht, { client: x, children: t }),
        });
      }
      (0, l.sX)({
        adapters: [m],
        networks: p,
        projectId: d,
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
    41394: (e, t, a) => {
      Promise.resolve().then(a.t.bind(a, 33063, 23)),
        Promise.resolve().then(a.bind(a, 72797)),
        Promise.resolve().then(a.bind(a, 85262)),
        Promise.resolve().then(a.bind(a, 55636)),
        Promise.resolve().then(a.bind(a, 71162)),
        Promise.resolve().then(a.bind(a, 8839)),
        Promise.resolve().then(a.bind(a, 49668)),
        Promise.resolve().then(a.bind(a, 54332)),
        Promise.resolve().then(a.bind(a, 40137));
    },
    41674: (e, t, a) => {
      "use strict";
      a.d(t, { cn: () => r });
      var s = a(52596),
        l = a(39688);
      function r() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, l.QP)((0, s.$)(t));
      }
    },
    43145: (e, t, a) => {
      "use strict";
      a.d(t, {
        aZ: () => l,
        bP: () => o,
        HM: () => x,
        l$: () => c,
        zP: () => n,
        KW: () => d,
        LD: () => i,
        gb: () => r,
      });
      var s = a(43987),
        l = (function (e) {
          return (e.BUY_WIDGET = "BUY_WIDGET"), e;
        })({});
      function r(e) {
        window.dataLayer && window.dataLayer.push({ event: "wallet_connect" }),
          (0, s.s)("Connect Wallet Clicked", { location: e });
      }
      function i() {
        window.dataLayer &&
          window.dataLayer.push({ event: "wallet_connected" }),
          (0, s.s)("Wallet Connected");
      }
      function n(e) {
        window.dataLayer &&
          window.dataLayer.push({
            event: "currency_selected",
            selectedCurrency: e,
          }),
          (0, s.s)("Currency Selected", { selectedCurrency: e });
      }
      function c() {
        window.dataLayer &&
          window.dataLayer.push({ event: "referral_link_pasted" }),
          (0, s.s)("Referral Pasted");
      }
      function o() {
        window.dataLayer && window.dataLayer.push({ event: "buy_now_clicked" }),
          (0, s.s)("Buy Button Clicked");
      }
      function x() {
        window.dataLayer &&
          window.dataLayer.push({ event: "referral_code_copied" }),
          (0, s.s)("Copy Referral Link Clicked");
      }
      function d(e, t, a) {
        window.dataLayer &&
          (window.dataLayer.push({ ecommerce: null }),
          window.dataLayer.push({
            event: "purchase",
            ecommerce: {
              transaction_id: e.transactionHash,
              currency: "USD",
              value: t,
            },
          })),
          (0, s.s)("Purchase With " + a, { amount: t });
      }
    },
    43987: (e, t, a) => {
      "use strict";
      function s(e, t) {
        var a;
        (null == (a = window.umami) ? void 0 : a.track)
          ? window.umami.track(e, t)
          : console.warn("Umami tracking not available.");
      }
      function l(e, t) {
        var a;
        (null == (a = window.umami) ? void 0 : a.identify)
          ? "string" == typeof e && window.umami.identify(e, t)
          : console.warn("Umami identify not available.");
      }
      a.d(t, { L: () => l, s: () => s });
    },
    49668: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => c });
      var s = a(95155),
        l = a(12115),
        r = a(5196),
        i = a(24357),
        n = a(66766);
      function c() {
        let [e, t] = (0, l.useState)(!1),
          a = [
            {
              title: "Contract Renounced",
              percentage: "10%",
              position: { top: "547px", left: "187px" },
            },
            {
              title: "Tax(buy/sell) 0%",
              percentage: "70%",
              position: { top: "547px", left: "673px" },
            },
            {
              title: "LP locked",
              percentage: "10%",
              position: { top: "780px", left: "241px" },
            },
            {
              title: "Community Owned",
              percentage: "5%",
              position: { top: "780px", left: "619px" },
            },
            {
              title: "Community Owned",
              percentage: "5%",
              position: { top: "949px", left: "530px" },
            },
          ],
          c = "0xComingSoon",
          o = async () => {
            try {
              await navigator.clipboard.writeText(c),
                t(!0),
                setTimeout(() => t(!1), 2e3);
            } catch (e) {
              console.error("Failed to copy: ", e);
            }
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("main", {
              id: "tokenomics",
              className:
                "hidden xl:flex flex-col items-center justify-between relative bg-black mx-auto pt-[120px]",
              children: (0, s.jsxs)("div", {
                className: "relative w-[1440px] h-[1100px]",
                children: [
                  (0, s.jsx)("header", {
                    className:
                      "flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]",
                    children: (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-start gap-[11px] relative self-stretch w-full flex-[0_0_auto]",
                      children: [
                        (0, s.jsx)("h2", {
                          className:
                            "relative self-stretch mt-[-1.00px] font-normal text-[#a6ff00] text-2xl text-center tracking-[-0.24px] leading-6",
                          children: "$OZ Token Distribution",
                        }),
                        (0, s.jsx)("h1", {
                          className:
                            "relative self-stretch font-semibold text-white text-[58px] text-center tracking-[-1.16px] leading-[62px]",
                          children: "Tokenomics",
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute w-[314px] h-[314px] top-[382px] left-[563px]",
                    children: (0, s.jsxs)("div", {
                      className:
                        "relative w-[454px] h-[454px] top-[-70px] left-[-70px]",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "absolute w-[454px] h-[454px] top-0 left-0 bg-[#a6ff00] opacity-20 rounded-full blur-[60px]",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "absolute flex items-center justify-center",
                          children: (0, s.jsx)("div", {
                            className: "flex items-center justify-center",
                            children: (0, s.jsx)(n.default, {
                              src: "/images/dashboard/ozak-logo-gradient.png",
                              alt: "OZAK Logo",
                              width: 538,
                              height: 538,
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute w-[836px] h-[836px] top-[111px] left-[302px] border border-gray-700/30 rounded-full",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "flex w-[1066px] items-center justify-between absolute top-[387px] left-[187px]",
                    children: a
                      .slice(0, 2)
                      .map((e, t) =>
                        (0, s.jsxs)(
                          "article",
                          {
                            className:
                              "flex flex-col w-[380px] h-[99px] items-start justify-center gap-[9px] px-[30px] py-px relative bg-[#5151511a] rounded-[22px] border border-[#FFFFFF33] shadow-[inset_-3px_-1px_14px_#ffffff1a] backdrop-blur-[57px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(57px)_brightness(100%)]",
                            children: [
                              (0, s.jsx)("h3", {
                                className:
                                  "relative w-fit font-normal text-white text-xl text-center tracking-[-0.08px] leading-6 whitespace-nowrap",
                                children: e.title,
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "inline-flex items-center gap-3.5 relative flex-[0_0_auto] mr-[-9.00px]",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "relative w-fit mt-[-1.00px] font-semibold text-white text-[22px] text-center tracking-[-0.09px] leading-6 whitespace-nowrap",
                                    children: e.percentage,
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "relative w-[268px] h-px",
                                    children: (0, s.jsx)("div", {
                                      className:
                                        "relative w-[271px] h-[3px] -top-0.5 -left-0.5 bg-gray-700 rounded-full",
                                      children: (0, s.jsx)("div", {
                                        className:
                                          "absolute h-[3px] top-0 left-0 bg-[#a6ff00] rounded-full",
                                        style: {
                                          width: 0 === t ? "85px" : "38px",
                                        },
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          t
                        )
                      ),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "flex w-[958px] items-center justify-between absolute top-[630px] left-[241px]",
                    children: a
                      .slice(2, 4)
                      .map((e, t) =>
                        (0, s.jsxs)(
                          "article",
                          {
                            className:
                              "flex flex-col w-[380px] h-[99px] items-start justify-center gap-[9px] px-[30px] py-px relative bg-[#5151511a] rounded-[22px] border border-[#FFFFFF33] shadow-[inset_-3px_-1px_14px_#ffffff1a] backdrop-blur-[57px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(57px)_brightness(100%)]",
                            children: [
                              (0, s.jsx)("h3", {
                                className:
                                  "relative w-fit font-normal text-white text-xl text-center tracking-[-0.08px] leading-6 whitespace-nowrap",
                                children: e.title,
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "inline-flex items-center gap-3.5 relative flex-[0_0_auto] mr-[-9.00px]",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "relative w-fit mt-[-1.00px] font-semibold text-white text-[22px] text-center tracking-[-0.09px] leading-6 whitespace-nowrap",
                                    children: e.percentage,
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "relative w-[268px] h-px",
                                    children: (0, s.jsx)("div", {
                                      className:
                                        "relative w-[271px] h-[3px] -top-0.5 -left-0.5 bg-gray-700 rounded-full",
                                      children: (0, s.jsx)("div", {
                                        className:
                                          "absolute h-[3px] top-0 left-0 bg-[#a6ff00] rounded-full",
                                        style: {
                                          width: 0 === t ? "85px" : "38px",
                                        },
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          t + 2
                        )
                      ),
                  }),
                  (0, s.jsxs)("article", {
                    className:
                      "flex flex-col w-[380px] h-[99px] items-start justify-center gap-[9px] px-[30px] py-px absolute top-[789px] left-[530px] bg-[#5151511a] rounded-[22px] border border-[#FFFFFF33] shadow-[inset_-3px_-1px_14px_#ffffff1a] backdrop-blur-[57px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(57px)_brightness(100%)]",
                    children: [
                      (0, s.jsx)("h3", {
                        className:
                          "relative w-fit font-normal text-white text-xl text-center tracking-[-0.08px] leading-6 whitespace-nowrap",
                        children: a[4].title,
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "inline-flex items-center gap-3.5 relative flex-[0_0_auto] mr-[-9.00px]",
                        children: [
                          (0, s.jsx)("span", {
                            className:
                              "relative w-fit mt-[-1.00px] font-semibold text-white text-[22px] text-center tracking-[-0.09px] leading-6 whitespace-nowrap",
                            children: a[4].percentage,
                          }),
                          (0, s.jsx)("div", {
                            className: "relative w-[268px] h-px",
                            children: (0, s.jsx)("div", {
                              className:
                                "relative w-[271px] h-[3px] -top-0.5 -left-0.5 bg-gray-700 rounded-full",
                              children: (0, s.jsx)("div", {
                                className:
                                  "w-[67px] absolute h-[3px] top-0 left-0 bg-[#a6ff00] rounded-full",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("section", {
                    className:
                      "flex flex-col w-[380px] h-[99px] items-center justify-center gap-2 absolute top-[227px] left-[530px] bg-[#a6ff001a] rounded-[22px] border border-[#FFFFFF33] shadow-[inset_-3px_-1px_14px_#ffffff1a] backdrop-blur-[57px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(57px)_brightness(100%)]",
                    children: [
                      (0, s.jsx)("h3", {
                        className:
                          "relative self-stretch font-normal text-white text-xl text-center tracking-[-0.08px] leading-6",
                        children: "Token Supply",
                      }),
                      (0, s.jsx)("span", {
                        className:
                          "relative self-stretch font-semibold text-[#a6ff00] text-[22px] text-center tracking-[-0.09px] leading-6",
                        children: "1B",
                      }),
                      (0, s.jsx)("div", {
                        className: "absolute top-[-38px] left-[-65px]",
                        children: (0, s.jsx)(n.default, {
                          src: "/images/dashboard/token-left.png",
                          alt: "Token Left",
                          width: 109.3,
                          height: 98,
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "absolute top-[807px] left-[1000px]",
                    children: (0, s.jsx)(n.default, {
                      src: "/images/dashboard/token-right.png",
                      alt: "Token Right",
                      width: 127.32253,
                      height: 105.33794,
                    }),
                  }),
                  (0, s.jsx)("section", {
                    className:
                      "flex flex-col items-center justify-center w-full absolute left-1/2 -translate-x-1/2 mt-[882px]",
                    children: (0, s.jsxs)("div", {
                      className:
                        "flex flex-col text-center w-[610px] h-[72px] items-center justify-between",
                      children: [
                        (0, s.jsx)("label", {
                          className:
                            "relative self-stretch mt-[-1.00px] font-normal text-[#ffffffb2] text-xl text-center tracking-[-0.08px] leading-6",
                          children: "Contract Address:",
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex items-center gap-5 w-full justify-center",
                          children: [
                            (0, s.jsx)("address", {
                              className:
                                "relative w-fit font-normal text-[#a6ff00] text-[22px] text-center tracking-[-0.09px] leading-6 whitespace-nowrap not-italic",
                              children: c,
                            }),
                            (0, s.jsx)("button", {
                              className:
                                "inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[42px] border-[none] backdrop-blur-[57px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(57px)_brightness(100%)] hover:bg-[#ffffff1a] transition-colors cursor-pointer",
                              onClick: o,
                              "aria-label": e
                                ? "Address copied!"
                                : "Copy contract address",
                              title: e
                                ? "Address copied!"
                                : "Copy contract address",
                              children: (0, s.jsx)("div", {
                                className: "relative w-6 h-6",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "relative w-[17px] h-[17px] top-[4px] left-[3px]",
                                  children: e
                                    ? (0, s.jsx)(r.A, {
                                        className: "w-4 h-4 text-white",
                                      })
                                    : (0, s.jsx)(i.A, {
                                        className: "w-4 h-4 text-white",
                                      }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, s.jsx)("main", {
              className:
                "hidden lg:flex xl:hidden flex-col items-center justify-between relative bg-black mx-auto mt-[60px]",
              children: (0, s.jsxs)("div", {
                className: "relative w-[900px] h-[660px] scale-75 origin-top",
                children: [
                  (0, s.jsx)("header", {
                    className:
                      "flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]",
                    children: (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-start gap-[11px] relative self-stretch w-full flex-[0_0_auto]",
                      children: [
                        (0, s.jsx)("h2", {
                          className:
                            "relative self-stretch mt-[-1.00px] font-normal text-[#a6ff00] text-2xl text-center tracking-[-0.24px] leading-6",
                          children: "$OZ Token Distribution",
                        }),
                        (0, s.jsx)("h1", {
                          className:
                            "relative self-stretch font-semibold text-white text-[58px] text-center tracking-[-1.16px] leading-[62px]",
                          children: "Tokenomics",
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute w-[250px] h-[250px] top-[300px] left-[325px]",
                    children: (0, s.jsxs)("div", {
                      className:
                        "relative w-[350px] h-[350px] top-[-50px] left-[-50px]",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "absolute w-[350px] h-[350px] top-0 left-0 bg-[#a6ff00] opacity-20 rounded-full blur-[60px]",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "absolute flex items-center justify-center",
                          children: (0, s.jsx)("div", {
                            className: "flex items-center justify-center",
                            children: (0, s.jsx)(n.default, {
                              src: "/images/dashboard/ozak-logo-gradient.png",
                              alt: "OZAK Logo",
                              width: 400,
                              height: 400,
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute w-[650px] h-[650px] top-[120px] left-[125px] border border-gray-700/30 rounded-full",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "flex w-[800px] items-center justify-between absolute top-[310px] left-[50px]",
                    children: a
                      .slice(0, 2)
                      .map((e, t) =>
                        (0, s.jsxs)(
                          "article",
                          {
                            className:
                              "flex flex-col w-[300px] h-[80px] items-start justify-center gap-[9px] px-[24px] py-px relative bg-[#5151511a] rounded-[22px] border border-[#FFFFFF33] shadow-[inset_-3px_-1px_14px_#ffffff1a] backdrop-blur-[57px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(57px)_brightness(100%)]",
                            children: [
                              (0, s.jsx)("h3", {
                                className:
                                  "relative w-fit font-normal text-white text-lg text-center tracking-[-0.08px] leading-6 whitespace-nowrap",
                                children: e.title,
                              }),
                              
                            ],
                          },
                          t
                        )
                      ),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "flex w-[720px] items-center justify-between absolute top-[510px] left-[90px]",
                    children: a
                      .slice(2, 4)
                      .map((e, t) =>
                        (0, s.jsxs)(
                          "article",
                          {
                            className:
                              "flex flex-col w-[300px] h-[80px] items-start justify-center gap-[9px] px-[24px] py-px relative bg-[#5151511a] rounded-[22px] border border-[#FFFFFF33] shadow-[inset_-3px_-1px_14px_#ffffff1a] backdrop-blur-[57px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(57px)_brightness(100%)]",
                            children: [
                              (0, s.jsx)("h3", {
                                className:
                                  "relative w-fit font-normal text-white text-lg text-center tracking-[-0.08px] leading-6 whitespace-nowrap",
                                children: e.title,
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "inline-flex items-center gap-3 relative flex-[0_0_auto] mr-[-9.00px]",
                                
                              }),
                            ],
                          },
                          t + 2
                        )
                      ),
                  }),
                  
                  (0, s.jsxs)("section", {
                    className:
                      "flex flex-col w-[300px] h-[80px] items-center justify-center gap-2 absolute top-[200px] left-[300px] bg-[#a6ff001a] rounded-[22px] border border-[#FFFFFF33] shadow-[inset_-3px_-1px_14px_#ffffff1a] backdrop-blur-[57px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(57px)_brightness(100%)]",
                    children: [
                      (0, s.jsx)("h3", {
                        className:
                          "relative self-stretch font-normal text-white text-lg text-center tracking-[-0.08px] leading-6",
                        children: "Token Supply",
                      }),
                      (0, s.jsx)("span", {
                        className:
                          "relative self-stretch font-semibold text-[#a6ff00] text-xl text-center tracking-[-0.09px] leading-6",
                        children: "10 Billion",
                      }),
                      (0, s.jsx)("div", {
                        className: "absolute top-[-30px] left-[-50px]",
                        children: (0, s.jsx)(n.default, {
                          src: "/images/dashboard/token-left.png",
                          alt: "Token Left",
                          width: 85,
                          height: 75,
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "absolute top-[620px] left-[700px]",
                    children: (0, s.jsx)(n.default, {
                      src: "/images/dashboard/token-right.png",
                      alt: "Token Right",
                      width: 95,
                      height: 80,
                    }),
                  }),
                  (0, s.jsx)("section", {
                    className:
                      "flex flex-col items-center justify-center w-full absolute left-1/2 -translate-x-1/2 mt-[680px]",
                    children: (0, s.jsxs)("div", {
                      className:
                        "flex flex-col text-center w-[500px] h-[60px] items-center justify-between",
                      children: [
                        (0, s.jsx)("label", {
                          className:
                            "relative self-stretch mt-[-1.00px] font-normal text-[#ffffffb2] text-lg text-center tracking-[-0.08px] leading-6",
                          children: "Contract Address:",
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex items-center gap-4 w-full justify-center",
                          children: [
                            (0, s.jsx)("address", {
                              className:
                                "relative w-fit font-normal text-[#a6ff00] text-lg text-center tracking-[-0.09px] leading-6 whitespace-nowrap not-italic",
                              children: c,
                            }),
                            (0, s.jsx)("button", {
                              className:
                                "inline-flex items-center justify-center gap-2.5 p-2 relative flex-[0_0_auto] rounded-[42px] border-[none] backdrop-blur-[57px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(57px)_brightness(100%)] hover:bg-[#ffffff1a] transition-colors cursor-pointer",
                              onClick: o,
                              "aria-label": e
                                ? "Address copied!"
                                : "Copy contract address",
                              title: e
                                ? "Address copied!"
                                : "Copy contract address",
                              children: (0, s.jsx)("div", {
                                className: "relative w-5 h-5",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "relative w-[15px] h-[15px] top-[2px] left-[2px]",
                                  children: e
                                    ? (0, s.jsx)(r.A, {
                                        className: "w-3 h-3 text-white",
                                      })
                                    : (0, s.jsx)(i.A, {
                                        className: "w-3 h-3 text-white",
                                      }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, s.jsx)("main", {
              className:
                "hidden md:flex lg:hidden flex-col items-center justify-between relative bg-black mx-auto",
              children: (0, s.jsxs)("div", {
                className:
                  "relative w-[700px] h-[450px] scale-[0.6] origin-top",
                children: [
                  (0, s.jsx)("header", {
                    className:
                      "flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]",
                    children: (0, s.jsxs)("div", {
                      className:
                        "flex flex-col items-start gap-[11px] relative self-stretch w-full flex-[0_0_auto]",
                      children: [
                        (0, s.jsx)("h2", {
                          className:
                            "relative self-stretch mt-[-1.00px] font-normal text-[#a6ff00] text-2xl text-center tracking-[-0.24px] leading-6 mb-2",
                          children: "$OZ Token Distribution",
                        }),
                        (0, s.jsx)("h1", {
                          className:
                            "relative self-stretch font-semibold text-white !text-[88px] text-center tracking-[-1.16px] leading-[62px]",
                          children: "Tokenomics",
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute w-[200px] h-[200px] top-[280px] left-[250px]",
                    children: (0, s.jsxs)("div", {
                      className:
                        "relative w-[280px] h-[280px] top-[-40px] left-[-40px]",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "absolute w-[280px] h-[280px] top-0 left-0 bg-[#a6ff00] opacity-20 rounded-full blur-[60px]",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "absolute flex items-center justify-center",
                          children: (0, s.jsx)("div", {
                            className: "flex items-center justify-center",
                            children: (0, s.jsx)(n.default, {
                              src: "/images/dashboard/ozak-logo-gradient.png",
                              alt: "OZAK Logo",
                              width: 320,
                              height: 320,
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute w-[520px] h-[520px] top-[150px] left-[90px] border border-gray-700/30 rounded-full",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "flex w-[640px] items-center justify-between absolute top-[290px] left-[30px]",
                    children: a
                      .slice(0, 2)
                      .map((e, t) =>
                        (0, s.jsxs)(
                          "article",
                          {
                            className:
                              "flex flex-col w-[240px] h-[70px] items-start justify-center gap-[7px] px-[20px] py-px relative bg-[#5151511a] rounded-[22px] border border-[#FFFFFF33] shadow-[inset_-3px_-1px_14px_#ffffff1a] backdrop-blur-[57px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(57px)_brightness(100%)]",
                            children: [
                              (0, s.jsx)("h3", {
                                className:
                                  "relative w-fit font-normal text-white text-base text-center tracking-[-0.08px] leading-5 whitespace-nowrap",
                                children: e.title,
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "inline-flex items-center gap-2.5 relative flex-[0_0_auto] mr-[-7.00px]",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "relative w-fit mt-[-1.00px] font-semibold text-white text-lg text-center tracking-[-0.09px] leading-5 whitespace-nowrap",
                                    children: e.percentage,
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "relative w-[160px] h-px",
                                    children: (0, s.jsx)("div", {
                                      className:
                                        "relative w-[160px] h-[3px] -top-0.5 -left-0.5 bg-gray-700 rounded-full",
                                      children: (0, s.jsx)("div", {
                                        className:
                                          "absolute h-[3px] top-0 left-0 bg-[#a6ff00] rounded-full",
                                        style: {
                                          width: 0 === t ? "52px" : "24px",
                                        },
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          t
                        )
                      ),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "flex w-[580px] items-center justify-between absolute top-[420px] left-[60px]",
                    children: a
                      .slice(2, 4)
                      .map((e, t) =>
                        (0, s.jsxs)(
                          "article",
                          {
                            className:
                              "flex flex-col w-[240px] h-[70px] items-start justify-center gap-[7px] px-[20px] py-px relative bg-[#5151511a] rounded-[22px] border border-[#FFFFFF33] shadow-[inset_-3px_-1px_14px_#ffffff1a] backdrop-blur-[57px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(57px)_brightness(100%)]",
                            children: [
                              (0, s.jsx)("h3", {
                                className:
                                  "relative w-fit font-normal text-white text-base text-center tracking-[-0.08px] leading-5 whitespace-nowrap",
                                children: e.title,
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "inline-flex items-center gap-2.5 relative flex-[0_0_auto] mr-[-7.00px]",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "relative w-fit mt-[-1.00px] font-semibold text-white text-lg text-center tracking-[-0.09px] leading-5 whitespace-nowrap",
                                    children: e.percentage,
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "relative w-[160px] h-px",
                                    children: (0, s.jsx)("div", {
                                      className:
                                        "relative w-[160px] h-[3px] -top-0.5 -left-0.5 bg-gray-700 rounded-full",
                                      children: (0, s.jsx)("div", {
                                        className:
                                          "absolute h-[3px] top-0 left-0 bg-[#a6ff00] rounded-full",
                                        style: {
                                          width: 0 === t ? "52px" : "24px",
                                        },
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          t + 2
                        )
                      ),
                  }),
                  (0, s.jsxs)("article", {
                    className:
                      "flex flex-col w-[240px] h-[70px] items-start justify-center gap-[7px] px-[20px] py-px absolute top-[520px] left-[230px] bg-[#5151511a] rounded-[22px] border border-[#FFFFFF33] shadow-[inset_-3px_-1px_14px_#ffffff1a] backdrop-blur-[57px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(57px)_brightness(100%)]",
                    children: [
                      (0, s.jsx)("h3", {
                        className:
                          "relative w-fit font-normal text-white text-base text-center tracking-[-0.08px] leading-5 whitespace-nowrap",
                        children: a[4].title,
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "inline-flex items-center gap-2.5 relative flex-[0_0_auto] mr-[-7.00px]",
                        children: [
                          (0, s.jsx)("span", {
                            className:
                              "relative w-fit mt-[-1.00px] font-semibold text-white text-lg text-center tracking-[-0.09px] leading-5 whitespace-nowrap",
                            children: a[4].percentage,
                          }),
                          (0, s.jsx)("div", {
                            className: "relative w-[160px] h-px",
                            children: (0, s.jsx)("div", {
                              className:
                                "relative w-[160px] h-[3px] -top-0.5 -left-0.5 bg-gray-700 rounded-full",
                              children: (0, s.jsx)("div", {
                                className:
                                  "w-[40px] absolute h-[3px] top-0 left-0 bg-[#a6ff00] rounded-full",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("section", {
                    className:
                      "flex flex-col w-[240px] h-[70px] items-center justify-center gap-1.5 absolute top-[200px] left-[230px] bg-[#a6ff001a] rounded-[22px] border border-[#FFFFFF33] shadow-[inset_-3px_-1px_14px_#ffffff1a] backdrop-blur-[57px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(57px)_brightness(100%)]",
                    children: [
                      (0, s.jsx)("h3", {
                        className:
                          "relative self-stretch font-normal text-white text-base text-center tracking-[-0.08px] leading-5",
                        children: "Token Supply",
                      }),
                      (0, s.jsx)("span", {
                        className:
                          "relative self-stretch font-semibold text-[#a6ff00] text-lg text-center tracking-[-0.09px] leading-5",
                        children: "10 Billion",
                      }),
                      (0, s.jsx)("div", {
                        className: "absolute top-[-25px] left-[-40px]",
                        children: (0, s.jsx)(n.default, {
                          src: "/images/dashboard/token-left.png",
                          alt: "Token Left",
                          width: 70,
                          height: 60,
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "absolute top-[520px] left-[560px]",
                    children: (0, s.jsx)(n.default, {
                      src: "/images/dashboard/token-right.png",
                      alt: "Token Right",
                      width: 75,
                      height: 65,
                    }),
                  }),
                  (0, s.jsx)("section", {
                    className:
                      "flex flex-col items-center justify-center w-full absolute left-1/2 -translate-x-1/2 mt-[600px]",
                    children: (0, s.jsxs)("div", {
                      className:
                        "flex flex-col text-center w-[400px] h-[50px] items-center justify-between",
                      children: [
                        (0, s.jsx)("label", {
                          className:
                            "relative self-stretch mt-[-1.00px] font-normal text-[#ffffffb2] text-base text-center tracking-[-0.08px] leading-5",
                          children: "Contract Address:",
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex items-center justify-center gap-3",
                          children: [
                            (0, s.jsx)("address", {
                              className:
                                "relative w-fit font-normal text-[#a6ff00] text-base text-center tracking-[-0.09px] leading-5 whitespace-nowrap not-italic",
                              children: c,
                            }),
                            (0, s.jsx)("button", {
                              className:
                                "inline-flex items-center justify-center gap-2 p-1.5 relative flex-[0_0_auto] rounded-[42px] border-[none] backdrop-blur-[57px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(57px)_brightness(100%)] hover:bg-[#ffffff1a] transition-colors cursor-pointer",
                              onClick: o,
                              "aria-label": e
                                ? "Address copied!"
                                : "Copy contract address",
                              title: e
                                ? "Address copied!"
                                : "Copy contract address",
                              children: (0, s.jsx)("div", {
                                className: "relative w-4 h-4",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "relative w-[13px] h-[13px] top-[1.5px] left-[1.5px]",
                                  children: e
                                    ? (0, s.jsx)(r.A, {
                                        className: "w-2.5 h-2.5 text-white",
                                      })
                                    : (0, s.jsx)(i.A, {
                                        className: "w-2.5 h-2.5 text-white",
                                      }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, s.jsxs)("main", {
              className:
                "flex md:hidden flex-col bg-black min-h-screen px-4 py-8",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col items-center gap-4 w-full",
                  children: [
                    (0, s.jsx)("div", {
                      className: "relative mb-2",
                      children: (0, s.jsxs)("div", {
                        className:
                          "relative w-[250px] h-[250px] flex items-center justify-center",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "absolute w-[300px] h-[300px] bg-[#a6ff00] opacity-10 rounded-full blur-[40px]",
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "absolute w-[200px] h-[200px] bg-white opacity-20 rounded-full blur-[20px]",
                          }),
                          (0, s.jsx)(n.default, {
                            src: "/images/dashboard/ozak-logo-gradient.png",
                            alt: "OZAK Logo",
                            width: 250,
                            height: 250,
                            className: "relative z-10",
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex flex-col items-center gap-4 mb-8",
                      children: [
                        (0, s.jsx)("h2", {
                          className:
                            "font-normal text-[#a6ff00] text-lg text-center",
                          children: "$OZ Token Distribution",
                        }),
                        (0, s.jsx)("h1", {
                          className:
                            "font-semibold text-white text-4xl text-center",
                          children: "Tokenomics",
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "w-full max-w-sm mb-6",
                      children: (0, s.jsxs)("div", {
                        className:
                          "bg-[#a6ff001a] rounded-2xl border border-[#FFFFFF33] shadow-[inset_-3px_-1px_14px_#ffffff1a] backdrop-blur-[57px] p-4 text-center",
                        children: [
                          (0, s.jsx)("h3", {
                            className: "font-normal text-white text-lg mb-1",
                            children: "Token Supply",
                          }),
                          (0, s.jsx)("span", {
                            className: "font-semibold text-[#a6ff00] text-xl",
                            children: "10 Billion",
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "w-full max-w-sm space-y-4 mb-8",
                      children: a.map((e, t) =>
                        (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "bg-[#5151511a] rounded-2xl border border-[#FFFFFF33] shadow-[inset_-3px_-1px_14px_#ffffff1a] backdrop-blur-[57px] p-4",
                            children: [
                              (0, s.jsx)("h3", {
                                className:
                                  "font-normal text-white text-lg mb-2",
                                children: e.title,
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "font-semibold text-white text-xl",
                                    children: e.percentage,
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "flex-1 bg-gray-700 h-1 rounded-full",
                                    children: (0, s.jsx)("div", {
                                      className:
                                        "bg-[#a6ff00] h-1 rounded-full",
                                      style: {
                                        width:
                                          "30%" === e.percentage
                                            ? "30%"
                                            : "20%" === e.percentage
                                            ? "20%"
                                            : "10%",
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "text-left",
                  children: [
                    (0, s.jsx)("label", {
                      className:
                        "font-normal text-[#ffffffb2] text-sm mb-2 block",
                      children: "Contract Address:",
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex items-center justify-start gap-3",
                      children: [
                        (0, s.jsx)("address", {
                          className:
                            "hidden md:block font-normal text-[#a6ff00] text-[18px] not-italic break-all",
                          children: c,
                        }),
                        (0, s.jsx)("address", {
                          className:
                            "block md:hidden font-normal text-[#a6ff00] text-[20px] not-italic break-all",
                          children: ""
                            .concat(c.slice(0, 9), "...")
                            .concat(c.slice(-6)),
                        }),
                        (0, s.jsx)("button", {
                          className:
                            "p-2 rounded-full hover:bg-[#ffffff1a] transition-colors",
                          onClick: o,
                          "aria-label": e
                            ? "Address copied!"
                            : "Copy contract address",
                          children: e
                            ? (0, s.jsx)(r.A, {
                                className: "w-4 h-4 text-white",
                              })
                            : (0, s.jsx)(i.A, {
                                className: "w-4 h-4 text-white",
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    50090: (e, t, a) => {
      "use strict";
      a.d(t, { bq: () => h, kb: () => p, yP: () => m });
      var s = a(61046),
        l = a(14493),
        r = a(1405),
        i = a(44494),
        n = a(1666),
        c = a(9428),
        o = a(31255),
        x = a(97748);
      let d = { ETH: 18, USDT: 6, USDC: 6 },
        p = async function (e, t, a) {
          let i,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : s.m8,
            x = d[t];
          return (
            (i =
              "ETH" === t
                ? (await (0, n.r)(e, { address: a })).value
                : await (0, c.J)(e, {
                    abi: l.xw,
                    address: o,
                    functionName: "balanceOf",
                    args: [a],
                  })),
            Number(Number((0, r.J)(i, x)).toFixed(3))
          );
        },
        m = (e) => ("USDC" === e ? o.G$ : "USDT" === e ? o.X8 : s.Xd),
        h = async (e, t) => {
          if (!t) return;
          let a = await (0, c.J)(e, {
            abi: x.b,
            address: o.rx,
            functionName: "getLatestPrice",
          });
          return parseInt((0, i.c)(a));
        };
    },
    54332: (e, t, a) => {
      "use strict";
      a.d(t, { ReferralProvider: () => i, T: () => n });
      var s = a(95155),
        l = a(12115);
      let r = (0, l.createContext)(void 0),
        i = (e) => {
          let { children: t } = e,
            [a, i] = (0, l.useState)(null);
          return (0, s.jsx)(r.Provider, {
            value: { referralCode: a, setReferralCode: i },
            children: t,
          });
        },
        n = () => {
          let e = (0, l.useContext)(r);
          if (void 0 === e)
            throw Error("useReferral must be used within a ReferralProvider");
          return e;
        };
    },
    55636: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => M });
      var s = a(95155),
        l = a(75432),
        r = a(40137),
        i = a(12115),
        n = a(2145),
        c = a(20123),
        o = a(43996),
        x = a(13244),
        d = a(53031),
        p = a(14493),
        m = a(61046),
        h = a(97868),
        f = a(60367),
        u = a(89090),
        g = a(88579),
        b = a(51235),
        w = a(97748),
        v = a(31255),
        j = a(50090),
        y = a(54416),
        N = a(5196),
        k = a(6874),
        F = a.n(k),
        A = a(54332);
      let C = (e) => {
        let { open: t, status: a, message: r, onClose: n } = e,
          { state: c } = (0, l.r)(),
          { referralCode: o } = (0, A.T)(),
          [x, d] = (0, i.useState)(!1),
          p = o ? "".concat("https://app.ozakai.xyz", "/buy?ref=") + o : null,
          m = async () => {
            try {
              p && (await navigator.clipboard.writeText(p)),
                d(!0),
                setTimeout(() => d(!1), 2e3);
            } catch (e) {
              console.error("Failed to copy link:", e);
            }
          },
          h = (e) => {
            let t = "Join me on OZAK AI and get bonus rewards!",
              a = p || "";
            switch (e) {
              case "telegram":
                window.open(
                  "https://t.me/share/url?url="
                    .concat(encodeURIComponent(a), "&text=")
                    .concat(encodeURIComponent(t)),
                  "_blank"
                );
                break;
              case "whatsapp":
                window.open(
                  "https://wa.me/?text=".concat(
                    encodeURIComponent(t + " " + a)
                  ),
                  "_blank"
                );
                break;
              case "facebook":
                window.open(
                  "https://www.facebook.com/sharer/sharer.php?u=".concat(
                    encodeURIComponent(a)
                  ),
                  "_blank"
                );
                break;
              case "twitter":
                window.open(
                  "https://twitter.com/intent/tweet?text="
                    .concat(encodeURIComponent(t), "&url=")
                    .concat(encodeURIComponent(a)),
                  "_blank"
                );
                break;
              case "instagram":
                m();
                break;
              case "email":
                window.open(
                  "mailto:?subject="
                    .concat(encodeURIComponent("Join OZAK AI"), "&body=")
                    .concat(encodeURIComponent(t + "\n\n" + a)),
                  "_blank"
                );
            }
          };
        return t
          ? "success" === a
            ? (0, s.jsx)("div", {
                className:
                  "fixed inset-0 z-50 flex items-center justify-center bg-black/50 m-4 md:m-0 backdrop-blur-sm",
                children: (0, s.jsxs)("div", {
                  className:
                    "relative w-full max-w-[498px] mx-auto p-4 md:px-6 md:py-7 success-modal-bg",
                  children: [
                    (0, s.jsx)("button", {
                      onClick: n,
                      className:
                        "absolute top-6 right-6 text-white/50 hover:text-white cursor-pointer transition-colors",
                      children: (0, s.jsx)(y.A, { size: 24 }),
                    }),
                    (0, s.jsx)("div", {
                      className: "flex justify-center mb-4.5",
                      children: (0, s.jsx)("div", {
                        className: "relative",
                        children: (0, s.jsx)("div", {
                          className:
                            "relative w-16 h-16 bg-[#FFFFFF26] rounded-[16px] flex items-center justify-center",
                          children: (0, s.jsx)("img", {
                            src: "/images/dashboard/ozak-ai-glow-2.png",
                            alt: "Success",
                            className: "object-contain",
                          }),
                        }),
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "text-center mb-[27px]",
                      children: [
                        (0, s.jsx)("h2", {
                          className:
                            "text-[22px] font-semibold leading-[27px] tracking-[-0.44px] text-[#A6FF00] mb-2",
                          children: "Purchase Successful",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-[14px] text-[#FFFFFFB2] font-normal leading-[20px] tracking-[-0.28px]",
                          children:
                            "You’ve successfully bought $OZ. Tokens will vest after TGE.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex justify-center mb-[27px]",
                      children: [
                        (0, s.jsx)("button", {
                          onClick: () => {
                            c.transactionHash &&
                              window.open(
                                "https://etherscan.io/tx/".concat(
                                  c.transactionHash
                                ),
                                "_blank"
                              );
                          },
                          className:
                            "bg-[#A6FF00] text-black text-[14px] font-semibold leading-[14px] tracking-[-0.28px] px-4 py-3 rounded-[20px] hover:opacity-90 transition-opacity cursor-pointer",
                          children: "View Transaction",
                        }),
                        (0, s.jsx)("a", {
                          href: "https://app.ozakai.xyz",
                          target: "_blank",
                          className:
                            "secondary-button-bg text-white text-[14px] font-semibold leading-[14px] tracking-[-0.28px] px-4 py-3 rounded-[20px] hover:opacity-90 transition-opacity cursor-pointer",
                          children: "Go to Dashboard",
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "w-full h-px bg-[#FFFFFF1A] mb-8",
                    }),
                    (0, s.jsxs)("div", {
                      className: "space-y-[27px] mt-[27px]",
                      children: [
                        (0, s.jsx)("div", {
                          className: "text-center",
                          children: (0, s.jsxs)("h3", {
                            className:
                              "text-[20px] font-medium leading-[27px] tracking-[-0.4px] text-white",
                            children: [
                              "Refer & Earn ",
                              (0, s.jsx)("span", {
                                className: "text-[#A6FF00]",
                                children: "10% $OZ",
                              }),
                              " ",
                              "Bonus on",
                              (0, s.jsx)("br", {}),
                              "Every Referral",
                            ],
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: "relative",
                          children: (0, s.jsx)("div", {
                            className: "social-box-bg px-3 py-[13px]",
                            children: (0, s.jsxs)("div", {
                              className: "flex items-center justify-between",
                              children: [
                                (0, s.jsxs)("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-[#A6FF00] text-[16px] font-normal leading-[24px] mb-0.5",
                                      children: "Your Referral Link",
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "bg-text-gradient-white text-[16px] font-medium leading-[24px] truncate",
                                      children: p,
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("button", {
                                  onClick: m,
                                  className:
                                    "ml-3 p-2.5 bg-white rounded-full transition-colors cursor-pointer",
                                  children: x
                                    ? (0, s.jsx)(N.A, {
                                        size: 20,
                                        className: "text-black",
                                      })
                                    : (0, s.jsx)("img", {
                                        src: "/icons/copy-black.svg",
                                      }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className: "text-center",
                          children: [
                            (0, s.jsx)("p", {
                              className:
                                "text-white text-[16px] font-normal leading-[22px] tracking-[-0.32px] mb-4",
                              children: "Share directly on your socials",
                            }),
                            (0, s.jsxs)("div", {
                              className: "flex justify-center gap-3",
                              children: [
                                (0, s.jsx)("button", {
                                  onClick: () => h("telegram"),
                                  className:
                                    "w-10 h-10 bg-[#FFFFFF1A] rounded-full flex items-center justify-center cursor-pointer",
                                  children: (0, s.jsx)("img", {
                                    src: "/icons/telegram-active-bg.svg",
                                    className: "w-[24px] h-[24px]",
                                  }),
                                }),
                                (0, s.jsx)("button", {
                                  onClick: () => h("whatsapp"),
                                  className:
                                    "w-10 h-10 bg-[#FFFFFF1A] rounded-full flex items-center justify-center cursor-pointer",
                                  children: (0, s.jsx)("img", {
                                    src: "/icons/whatsapp-active.svg",
                                    className: "w-[24px] h-[24px]",
                                  }),
                                }),
                                (0, s.jsx)("button", {
                                  onClick: () => h("facebook"),
                                  className:
                                    "w-10 h-10 bg-[#FFFFFF1A] rounded-full flex items-center justify-center cursor-pointer",
                                  children: (0, s.jsx)("img", {
                                    src: "/icons/facebook-active.svg",
                                    className: "w-[24px] h-[24px]",
                                  }),
                                }),
                                (0, s.jsx)("button", {
                                  onClick: () => h("twitter"),
                                  className:
                                    "w-10 h-10 bg-[#FFFFFF1A] rounded-full flex items-center justify-center cursor-pointer",
                                  children: (0, s.jsx)("img", {
                                    src: "/icons/twitter-active-bg.svg",
                                    className: "w-[24px] h-[24px]",
                                  }),
                                }),
                                (0, s.jsx)("button", {
                                  onClick: () => h("instagram"),
                                  className:
                                    "w-10 h-10 bg-[#FFFFFF1A] rounded-full flex items-center justify-center cursor-pointer",
                                  children: (0, s.jsx)("img", {
                                    src: "/icons/instagram-active.svg",
                                    className: "w-[24px] h-[24px]",
                                  }),
                                }),
                                (0, s.jsx)("button", {
                                  onClick: () => h("email"),
                                  className:
                                    "w-10 h-10 bg-[#FFFFFF1A] rounded-full flex items-center justify-center cursor-pointer",
                                  children: (0, s.jsx)("img", {
                                    src: "/icons/mail-active.svg",
                                    className: "w-[24px] h-[24px]",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : (0, s.jsx)("div", {
                className:
                  "fixed inset-0 z-50 flex items-center justify-center bg-black/60 m-4 md:m-0 backdrop-blur-sm",
                children: (0, s.jsxs)("div", {
                  className:
                    "relative w-full max-w-md mx-auto wallet-modal-bg px-6 py-7 border border-white/10",
                  children: [
                    "failed" === a &&
                      (0, s.jsx)("button", {
                        onClick: n,
                        className:
                          "absolute top-4 right-4 text-white/50 hover:text-white cursor-pointer",
                        children: (0, s.jsx)(y.A, { size: 20 }),
                      }),
                    (0, s.jsx)("div", {
                      className: "flex justify-center mb-4.5",
                      children: (0, s.jsx)("div", {
                        className:
                          "w-12 h-12 bg-[#FFFFFF1A] !mix-blend-luminosity rounded-[12px] flex items-center justify-center",
                        children: (0, s.jsx)("img", {
                          src:
                            "initiated" === a || "processing" === a
                              ? "/images/wallet.svg"
                              : "/images/failed.svg",
                          alt: "icon",
                          className: "object-contain",
                        }),
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "text-center text-white px-4 mb-4.5",
                      children: [
                        (0, s.jsx)("h2", {
                          className:
                            "text-[18px] md:text-[22px] font-semibold leading-[24px] md:leading-[27px] tracking-[-0.36px] md:tracking-[-0.44px] mb-2",
                          children:
                            "USDT" === c.selectedCurrency ||
                            "USDC" === c.selectedCurrency
                              ? "initiated" === a
                                ? "Approve ".concat(
                                    c.selectedCurrency,
                                    " to Buy $OZ"
                                  )
                                : "processing" === a
                                ? "".concat(c.selectedCurrency, " Approved")
                                : "failed" === a
                                ? "Transaction Failed"
                                : "Transaction Status"
                              : "initiated" === a || "processing" === a
                              ? "Waiting for Wallet Confirmation"
                              : "failed" === a
                              ? "Transaction Failed"
                              : "Transaction Status",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-[14px] text-[#FFFFFFB2] leading-[20px] tracking-[-0.28px]",
                          children: r,
                        }),
                      ],
                    }),
                    ("initiated" === a || "processing" === a) &&
                      (0, s.jsx)("div", {
                        className: "mt-6 flex justify-center",
                        children: (0, s.jsx)("div", {
                          className:
                            "w-6 h-6 rounded-full border-2 border-white border-t-transparent animate-spin",
                        }),
                      }),
                    "failed" === a &&
                      (0, s.jsxs)("div", {
                        className: "mt-[27px] flex justify-center gap-4",
                        children: [
                          (0, s.jsx)("button", {
                            className:
                              "px-[42px] py-[16px] text-[14px] text-white font-semibold leading-[14px] tracking-[-0.28px] close-button-bg cursor-pointer",
                            onClick: n,
                            children: "Close",
                          }),
                        ],
                      }),
                  ],
                }),
              })
          : null;
      };
      var _ = a(75162),
        T = a(7933),
        E = a(43145),
        S = a(43987),
        P = (function (e) {
          return (
            (e.SendApproval = "sendApproval"),
            (e.SkipApproval = "skipApproval"),
            (e.RevokeAndApprove = "revokeApprovalAndSendApproval"),
            e
          );
        })(P || {});
      function D() {
        var e, t;
        let { chainId: a, isConnected: r, address: y } = (0, n.F)(),
          { state: N, setTransactionHash: k } = (0, l.r)(),
          { open: A } = (0, b.JS)(),
          P =
            N.enterAmount &&
            Number(N.enterAmount) > 0 &&
            Number(N.enterAmount) <= N.walletBalance &&
            !N.purchaseLoading &&
            r,
          { data: D } = (0, c.E)({ chainId: a }),
          { writeContractAsync: R } = (0, o.x)(),
          { data: O } = (0, x.Q)({
            abi: p.xw,
            address: v.X8,
            functionName: "allowance",
            args: [y || m.Xd, v.rx],
          }),
          L = (0, d.U)(),
          [z, I] = (0, i.useState)(!1),
          [B, U] = (0, i.useState)("idle"),
          [$, H] = (0, i.useState)("Preparing transaction..."),
          Z = async function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : m.Xd,
              t = await R({
                abi: w.b,
                address: v.rx,
                functionName: "buyTokensETH",
                args: [e],
                value: (0, h.g)(N.enterAmount),
              });
            return await (0, _.n)(L, { hash: t }), t;
          },
          W = async (e, t) => {
            let a = await R({
              abi: p.xw,
              address: e,
              functionName: "approve",
              args: [v.rx, t],
            });
            return await (0, _.n)(L, { hash: a }), a;
          },
          M = async (e, t) => {
            if (e !== v.X8) return "sendApproval";
            if (void 0 !== O)
              if (!(O > 0)) return "sendApproval";
              else if (O >= t) return "skipApproval";
              else return "revokeApprovalAndSendApproval";
            throw Error("Allowance Cant be read");
          },
          Y = async function (e, t) {
            let a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : m.Xd,
              s = await R({
                abi: w.b,
                address: v.rx,
                functionName: "buyTokens",
                args: [e, t, a],
              });
            return await (0, _.n)(L, { hash: s }), s;
          },
          G = (e) =>
            (0, f.p)({ abi: p.xw, functionName: "approve", args: [v.rx, e] }),
          q = function (e, t) {
            let a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : m.Xd;
            return (0, f.p)({
              abi: w.b,
              functionName: "buyTokens",
              args: [e, t, a],
            });
          },
          X = async function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : m.Xd;
            I(!0),
              U("initiated"),
              H("Check your wallet and approve the token to continue.");
            try {
              if (e !== m.Xd && (e = await V(e)) === y) {
                U("failed"),
                  H("Invalid Referral Code, No funds were deducted.");
                return;
              }
              if ("ETH" === N.selectedCurrency) {
                let t = await Z(e);
                k(t.toString()),
                  U("processing"),
                  H("Check your wallet and approve the token to continue.");
              } else {
                var t;
                let a = (0, j.yP)(N.selectedCurrency),
                  s = (0, u.X)(N.enterAmount, 6);
                if (
                  (null == D || null == (t = D.atomic) ? void 0 : t.status) ===
                  "supported"
                ) {
                  U("processing"),
                    H("Check your wallet and approve the token to continue.");
                  let t = await (0, T.y)(L, {
                    calls: [
                      { to: a, data: G(s) },
                      { to: v.rx, data: q(a, s, e) },
                    ],
                  });
                  k(t.id),
                    H("Check your wallet and approve the token to continue.");
                } else {
                  H(
                    "You need to approve ".concat(
                      N.selectedCurrency,
                      " from your connected wallet before you can buy $OZ."
                    )
                  );
                  let t = await M(a, s);
                  "sendApproval" === t
                    ? await W(a, g.Ao)
                    : "revokeApprovalAndSendApproval" === t &&
                      (await W(a, BigInt(0)), await W(a, g.Ao)),
                    U("processing"),
                    H("Now confirm the transaction to buy $OZ.");
                  let l = await Y(a, s, e);
                  k(l);
                }
              }
              U("success"),
                H(
                  "You’ve successfully bought $OZ. Tokens will vest after TGE."
                );
            } catch (e) {
              console.error(e),
                U("failed"),
                H("Something went wrong. No funds were deducted.");
            }
          },
          K = async () => {
            let e =
              "string" == typeof N.referralCodeValue &&
              "" !== N.referralCodeValue
                ? N.referralCodeValue
                : m.Xd;
            (0, E.bP)(), await X(e);
          };
        async function V(e) {
          let t = await fetch(
            ""
              .concat("https://app.ozakai.xyz", "/api/v2/user/by-referral/")
              .concat(e)
          );
          if (!t.ok)
            throw Error("API request failed with status ".concat(t.status));
          let { data: a } = await t.json();
          return a.address;
        }
        return (
          (0, i.useEffect)(() => {
            r && y && ((0, S.L)(y), (0, E.LD)());
          }, [r]),
          (0, i.useEffect)(() => {
            if (N.transactionHash && "success" === B) {
              let e =
                "ETH" === N.selectedCurrency
                  ? N.ethPrice * Number(N.enterAmount)
                  : N.enterAmount;
              (0, E.KW)(N.transactionHash, e, N.selectedCurrency);
            }
          }, [N.transactionHash, B]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(C, {
                open: z,
                status: B,
                message: $,
                onClose: () => {
                  I(!1), k(null);
                },
              }),
              (0, s.jsxs)("div", {
                className: "flex flex-col md:flex-row gap-4 mb-6",
                children: [
                  (null == (e = N.tokenData) ? void 0 : e.stageEnded)
                    ? (0, s.jsxs)("button", {
                        disabled: !0,
                        className:
                          "flex-1 text-[#FFFFFFB2] bg-[#A6FF004D] px-[42px] py-[14px] text-[22px] rounded-[42px] font-semibold tracking-[-0.44px] transition-all cursor-not-allowed",
                        children: [
                          "Phase ",
                          null == (t = N.tokenData) ? void 0 : t.phase,
                          " Ended",
                        ],
                      })
                    : r
                    ? (0, s.jsx)("button", {
                        onClick: K,
                        disabled: !P,
                        className:
                          "flex-1 text-black px-[42px] py-[14px] text-[22px] rounded-2xl font-semibold tracking-[-0.44px] transition-all ".concat(
                            P
                              ? "buy-button-bg text-black cursor-pointer"
                              : "buy-button-bg cursor-not-allowed"
                          ),
                        children: N.purchaseLoading
                          ? "Processing..."
                          : "Buy Now",
                      })
                    : (0, s.jsx)("button", {
                        onClick: () => {
                          (0, E.gb)(E.aZ.BUY_WIDGET), A();
                        },
                        className:
                          "flex-1 text-[#A6FF00] border-1 border-[#A6FF00] rounded-[42px] px-[42px] py-[14px] text-[22px] font-semibold tracking-[-0.44px] transition-all cursor-pointer",
                        children: "Connect Wallet",
                      }),
                ],
              }),
            ],
          })
        );
      }
      function R(e) {
        let { className: t = "", style: a = {} } = e;
        return (0, s.jsx)("span", {
          className: "inline-block animate-pulse bg-[#232323] rounded ".concat(
            t
          ),
          style: a,
        });
      }
      function O() {
        var e, t;
        let { state: a } = (0, l.r)(),
          r =
            !a.tokenData ||
            "string" != typeof a.tokenData.totalOzSold ||
            "string" != typeof a.tokenData.totalRaised,
          n = (0, i.useMemo)(() => {
            if (!a.tokenData) return 0;
            let e =
              Number(a.tokenData.totalOzSold.replace(/,/g, "")) +
              Number(a.tokenData.remaining.replace(/,/g, ""));
            return (
              (Number(a.tokenData.totalOzSold.replace(/,/g, "")) / e) * 100
            );
          }, [a.tokenData]);
        return (0, s.jsxs)("div", {
          className: "mb-8",
          children: [
            (0, s.jsxs)("div", {
              className: "grid grid-cols-2 gap-6 mb-6",
              children: [
                (0, s.jsxs)("div", {
                  className: "text-left",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "text-white text-[14px] md:text-[16px] font-normal tracking-[-0.28px] md:tracking-[-0.32px] mb-1",
                      children: "Tokens Sold (Phase-4)",
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "text-white text-nowrap text-[18px] md:text-[22px] font-semibold tracking-[-0.36px] md:tracking-[-0.44px]",
                      children: r
                        ? (0, s.jsx)(R, { className: "w-28 h-6 bg-[#232323]" })
                        : (0, s.jsxs)(s.Fragment, {
                            children: [
                              null == (e = a.tokenData)
                                ? void 0
                                : e.totalOzSold,
                              " ",
                              (0, s.jsx)("span", {
                                className: "text-[#A6FF00]",
                                children: "$OZ",
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "text-right",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "text-white text-[14px] md:text-[16px] font-normal tracking-[-0.28px] md:tracking-[-0.32px] mb-1",
                      children: "Total Raised",
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "text-white text-[18px] md:text-[22px] font-semibold tracking-[-0.36px] md:tracking-[-0.44px]",
                      children: r
                        ? (0, s.jsx)(R, { className: "w-24 h-6 bg-[#232323]" })
                        : (0, s.jsxs)(s.Fragment, {
                            children: [
                              "$",
                              null == (t = a.tokenData)
                                ? void 0
                                : t.totalRaised,
                            ],
                          }),
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "w-full bg-[#FFFFFF1A] rounded-full h-2 relative",
              children: (0, s.jsx)("div", {
                className:
                  "bg-[#A6FF00] h-2 rounded-full relative transition-all duration-500",
                style: { width: "".concat(n, "%") },
              }),
            }),
          ],
        });
      }
      var L = a(66766),
        z = a(44494),
        I = a(43809),
        B = a(65606);
      function U() {
        var e;
        let { isConnected: t } = (0, b.G8)(),
          { open: a } = (0, b.JS)(),
          { state: r, dispatch: i } = (0, l.r)(),
          { data: n } = (0, I.Y)(),
          { data: c } = (0, B.H)({
            abi: w.b,
            address: v.rx,
            functionName: "buyTokensETH",
            args: [m.Xd],
            value: (0, h.g)(r.enterAmount),
          }),
          o = async () => {
            await a({ view: "Connect", namespace: "eip155" });
          },
          x = (e) => {
            if (!t) return void o();
            (0, E.zP)(e.name),
              i({ type: "SET_SELECTED_CURRENCY", payload: e.name });
          },
          d = [
            {
              name: "ETH",
              icon: (0, s.jsx)(L.default, {
                src: "/images/dashboard/eth-logo.svg",
                alt: "ETH",
                width: 24,
                height: 24,
                className: "w-8 h-8 mix-blend-luminosity",
              }),
            },
            {
              name: "USDT",
              icon: (0, s.jsx)(L.default, {
                src: "/images/dashboard/usdt-logo.svg",
                alt: "USDT",
                width: 24,
                height: 24,
                className: "w-8 h-8 mix-blend-luminosity",
              }),
            },
            {
              name: "USDC",
              icon: (0, s.jsx)(L.default, {
                src: "/images/dashboard/usdc-logo.svg",
                alt: "USDC",
                width: 24,
                height: 24,
                className: "w-8 h-8 mix-blend-luminosity",
              }),
            },
          ];
        return (0, s.jsx)("div", {
          className: "mb-6",
          children: (0, s.jsxs)("div", {
            className: "flex flex-col md:flex-row gap-[9px]",
            children: [
              (0, s.jsxs)("div", {
                className:
                  "relative flex items-center px-[20px] py-[12px] border border-[#FFFFFF33] rounded-[50px]",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex items-center gap-3 flex-1",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "w-[26px] h-[26px] bg-gray-700 rounded-full flex items-center justify-center",
                        children:
                          null ==
                          (e = d.find((e) => e.name === r.selectedCurrency))
                            ? void 0
                            : e.icon,
                      }),
                      (0, s.jsx)("input", {
                        type: "tel",
                        inputMode: "decimal",
                        pattern: "^[0-9][.,]?[0-9]$",
                        value: r.enterAmount,
                        onChange: (e) => {
                          if (!t) return void o();
                          let a = e.target.value;
                          ("" === a || /^\d*\.?\d*$/.test(a)) &&
                            i({ type: "SET_ENTER_AMOUNT", payload: a });
                        },
                        placeholder: "Input Amount",
                        onWheel: (e) => e.currentTarget.blur(),
                        className:
                          "bg-transparent text-white placeholder:text-[#AFAFAF] text-[18px] placeholder:text-[18px] md:text-[22px] font-medium outline-none flex-1",
                      }),
                    ],
                  }),
                  (0, s.jsx)("button", {
                    onClick: () => {
                      if (!t) return void o();
                      let e = r.walletBalance;
                      if ("ETH" === r.selectedCurrency) {
                        let t =
                          c && n
                            ? c * n + (0, h.g)("0.0005")
                            : (0, h.g)("0.002");
                        e = Math.max(0, r.walletBalance - Number((0, z.c)(t)));
                      }
                      i({ type: "SET_ENTER_AMOUNT", payload: e.toFixed(4) });
                    },
                    className:
                      "absolute right-4 top-1/2 transform -translate-y-1/2 text-white rounded-lg text-[14px] md:text-[18px] font-semibold tracking-[-0.28px] md:tracking-[-0.36px] underline cursor-pointer",
                    children: "MAX",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "flex gap-2 justify-between",
                children: d.map((e) =>
                  (0, s.jsx)(
                    "button",
                    {
                      onClick: () => x(e),
                      className:
                        "grow md:grow-0 flex items-center justify-center gap-2 px-[20px] md:px-[20px] py-[10px] md:py-[12px] rounded-[42px] text-[18px] md:text-[20px] font-semibold tracking-[-0.44px] cursor-pointer ".concat(
                          r.selectedCurrency === e.name
                            ? "bg-[#A6FF0033] text-[#A6FF00] border border-[#A6FF0033]"
                            : "text-[#FFFFFF99] border border-[#FFFFFF33]"
                        ),
                      children: e.name,
                    },
                    e.name
                  )
                ),
              }),
            ],
          }),
        });
      }
      function $() {
        let e = [
          {
            icon: (0, s.jsx)("div", {
              className:
                "relative w-[280px] h-[280px] md:w-[433.28px] md:h-[433.28px] lg:w-[35px] lg:h-[35px] flex items-center justify-center",
              children: (0, s.jsx)(L.default, {
                src: "/images/dashboard/whitepaper.svg",
                alt: "WhitePaper",
                fill: !0,
                className: "object-contain",
              }),
            }),
            href: "".concat("https://ozakai.xyz", "/Ozak AI whitepaper V 1.0.pdf"),
          },
        ];
        return (0, s.jsx)("div", {
          className: "flex justify-center gap-4 mb-6",
          children: e.map((e, t) =>
            (0, s.jsx)(
              F(),
              {
                href: e.href,
                target: "_blank",
                className:
                  "w-[64px] h-[64px] px-4 py-4.5 socials-bg rounded-full flex items-center justify-center transition-colors group cursor-pointer",
                children: e.icon,
              },
              t
            )
          ),
        });
      }
      function H(e) {
        var t, a;
        let { card: l } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className:
                "hidden md:flex flex-col items-center justify-center border-gradient-overlay-button-gray stat-card-bg px-[12px] md:px-[44px] py-[20px] text-center",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "text-white text-[14px] md:text-[16px] font-normal tracking-[-0.28px] md:tracking-[-0.32px] mb-2 md:mb-1 text-nowrap",
                  children: l.label,
                }),
                (0, s.jsx)("div", {
                  className:
                    "text-white text-[18px] md:text-[22px] font-semibold tracking-[-0.36px] md:tracking-[-0.44px]",
                  children: null != (t = l.value) ? t : "...",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className:
                "md:hidden flex flex-col items-center justify-center md:px-[44px] py-[20px] ".concat(
                  "Current Price" === l.label
                    ? "items-start text-left"
                    : "Target Price" === l.label
                    ? "items-end text-right"
                    : "items-center text-center"
                ),
              children: [
                (0, s.jsx)("div", {
                  className:
                    "text-white text-[14px] md:text-[16px] font-normal tracking-[-0.28px] md:tracking-[-0.32px] mb-1 text-nowrap",
                  children: l.label,
                }),
                (0, s.jsx)("div", {
                  className:
                    "text-white text-[18px] md:text-[22px] font-semibold tracking-[-0.36px] md:tracking-[-0.44px]",
                  children: null != (a = l.value) ? a : "...",
                }),
              ],
            }),
          ],
        });
      }
      function Z(e) {
        let { className: t = "", style: a = {} } = e;
        return (0, s.jsx)("div", {
          className: "animate-pulse bg-[#232323] rounded ".concat(t),
          style: a,
        });
      }
      function W() {
        var e, t, a, r, c, o, x, d, p, m, h, f;
        let { state: u, calculateOzReceived: g, dispatch: b } = (0, l.r)(),
          { address: w } = (0, n.F)(),
          v = (function () {
            let e = (0, i.useCallback)((e, t) => {
                window.umami && window.umami.track(e, t);
              }, []),
              t = (0, i.useCallback)((e, t) => {
                window.umami && window.umami.identify(e, t);
              }, []);
            return {
              track: e,
              identify: t,
              consent: (0, i.useCallback)(() => {
                window.umami && window.umami.consent();
              }, []),
              reject: (0, i.useCallback)(() => {
                window.umami && window.umami.reject();
              }, []),
            };
          })(),
          j =
            !u.tokenData ||
            "number" != typeof u.tokenData.ozPrice ||
            "number" != typeof u.tokenData.nextPhaseTarget ||
            "number" != typeof u.tokenData.targetPrice ||
            "number" != typeof u.tokenData.phase,
          y = [
            {
              label: "Current Price",
              value: j
                ? null
                : "$".concat(
                    null == (t = u.tokenData) || null == (e = t.ozPrice)
                      ? void 0
                      : e.toFixed(3)
                  ),
            },
            {
              label: "Next Phase Target",
              value: j
                ? null
                : "$".concat(
                    null == (r = u.tokenData) || null == (a = r.nextPhaseTarget)
                      ? void 0
                      : a.toFixed(2)
                  ),
            },
            {
              label: "Target Price",
              value: j
                ? null
                : "$".concat(
                    null == (o = u.tokenData) || null == (c = o.targetPrice)
                      ? void 0
                      : c.toFixed(1)
                  ),
            },
          ],
          N = async () => {
            if (navigator.clipboard)
              try {
                let e = await navigator.clipboard.readText();
                (0, E.l$)();
                let t = e.trim(),
                  a = t.match(/[?&]ref=([a-zA-Z0-9]+)/);
                a && a[1] && (t = a[1]),
                  b({ type: "SET_REFERRAL_CODE_VALUE", payload: t });
              } catch (e) {
                console.error(e);
              }
          };
        i.useEffect(() => {
          window.umami &&
            "string" == typeof w &&
            w.length > 0 &&
            v.identify(w, { address: w });
        }, [w, v]);
        let k =
          "number" != typeof u.walletBalance || Number.isNaN(u.walletBalance);
        return null;
      }
      function M() {
        return (0, s.jsx)(r.AppKitProvider, {
          children: (0, s.jsx)(l.TokenProvider, {
            children: (0, s.jsx)(W, {}),
          }),
        });
      }
    },
    71162: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => d });
      var s = a(95155),
        l = a(66766),
        r = a(12115),
        i = a(62720),
        n = a(52681),
        c = a(95056),
        o = a(6874),
        x = a.n(o);
      function d() {
        let e = (0, r.useRef)(null),
          { scrollYProgress: t } = (0, i.L)({
            target: e,
            offset: ["start start", "end end"],
          }),
          a = [
            {
              step: "Step 1",
              title: "Open the official Ozak AI website",
              description:
                "Start by heading to our verified homepage. Bookmark it now so you never stumble into a phishing copy.",
              image: "/images/dashboard/step1-browser.png",
              imageAlt: "Browser icon",
            },
            {
              step: "Step 2",
              title: "Connect Your Crypto Wallet",
              description:
                'Hit "Connect Wallet" and choose MetaMask, WalletConnect, Coinbase Wallet, or any other option you prefer.',
              image: "/images/dashboard/step2-wallet.png",
              imageAlt: "Wallet icon",
            },
            {
              step: "Step 3",
              title: "Choose how you want to Pay",
              description:
                "Select the currency and wallet you'll use - ETH, USDC, or USDT. Make sure to have some ETH in your wallet to pay for gas.",
              image: "/images/dashboard/step3-payment.png",
              imageAlt: "Payment icon",
            },
            {
              step: "Step 4",
              title: "Double-check and confirm",
              description:
                "Review the amount of $OZ you're buying, make sure all the numbers look right, then approve the transaction. Done!",
              image: "/images/dashboard/step4-confirm.png",
              imageAlt: "Confirm icon",
            },
          ];
        (0, n.G)(t, [0, 1], ["0%", "100%"]);
        let [o, d] = (0, r.useState)(0);
        return null;
      }
    },
    72797: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => r });
      var s = a(95155),
        l = a(66766);
      function r() {
        let e = [
          {
            name: "TechBullion",
            image: (0, s.jsx)(l.default, {
              src: "/images/predictive-ai/techbullion.svg",
              alt: "TechBullion",
              width: 140,
              height: 38,
              className: "object-contain mix-blend-luminosity grayscale",
            }),
          },
          {
            name: "ThePrint",
            image: (0, s.jsx)(l.default, {
              src: "/images/predictive-ai/theprint.svg",
              alt: "ThePrint",
              width: 120,
              height: 23,
              className: "object-contain mix-blend-luminosity grayscale",
            }),
          },
          {
            name: "Cointelegraph",
            image: (0, s.jsx)(l.default, {
              src: "/images/predictive-ai/cointelegraph.svg",
              alt: "Cointelegraph",
              width: 150,
              height: 42,
              className: "object-contain mix-blend-luminosity grayscale",
            }),
          },
          {
            name: "CoinMarketCap",
            image: (0, s.jsx)(l.default, {
              src: "/images/predictive-ai/coinmarketcap.svg",
              alt: "CoinMarketCap",
              width: 130,
              height: 23,
              className: "object-contain mix-blend-luminosity grayscale",
            }),
          },
          {
            name: "Trade Brains",
            image: (0, s.jsx)(l.default, {
              src: "/images/predictive-ai/tradebrains.svg",
              alt: "Trade Brains",
              width: 180,
              height: 40,
              className: "object-contain mix-blend-luminosity grayscale",
            }),
          },
          {
            name: "CoinPedia",
            image: (0, s.jsx)(l.default, {
              src: "/images/predictive-ai/coinpedia.svg",
              alt: "CoinPedia",
              width: 120,
              height: 28,
              className: "object-contain mix-blend-luminosity grayscale",
            }),
          },
          {
            name: "Analytics Insight",
            image: (0, s.jsx)(l.default, {
              src: "/images/predictive-ai/analytics.svg",
              alt: "Analytics Insight",
              width: 140,
              height: 19,
              className: "object-contain mix-blend-luminosity grayscale",
            }),
          },
          {
            name: "CryptoDaily",
            image: (0, s.jsx)(l.default, {
              src: "/images/predictive-ai/cryptodaily.svg",
              alt: "CryptoDaily",
              width: 110,
              height: 28,
              className: "object-contain mix-blend-luminosity grayscale",
            }),
          },
          {
            name: "Coinspeaker",
            image: (0, s.jsx)(l.default, {
              src: "/images/predictive-ai/coinspeaker.png",
              alt: "Coinspeaker",
              width: 150,
              height: 41,
              className: "object-contain mix-blend-luminosity grayscale",
            }),
          },
          {
            name: "CoinCentral",
            image: (0, s.jsx)(l.default, {
              src: "/images/predictive-ai/coincentral.png",
              alt: "CoinCentral",
              width: 160,
              height: 32,
              className: "object-contain mix-blend-luminosity grayscale",
            }),
          },
          {
            name: "crypto reporter",
            image: (0, s.jsx)(l.default, {
              src: "/images/predictive-ai/cryptoreporter.svg",
              alt: "crypto reporter",
              width: 160,
              height: 77,
              className: "object-contain mix-blend-luminosity grayscale",
            }),
          },
          {
            name: "LIVE NEWS",
            image: (0, s.jsx)(l.default, {
              src: "/images/predictive-ai/livenews.svg",
              alt: "LIVE NEWS",
              width: 150,
              height: 41,
              className: "object-contain mix-blend-luminosity grayscale",
            }),
          },
        ];
        return (0, s.jsx)("div", {
          className:
            "relative container mx-auto overflow-hidden px-4 md:px-6 lg:px-[200px] xl:px-[300px] bg-[#000000] mb-[30px] md:mb-[60px]",
          children: (0, s.jsxs)("div", {
            className: "container overflow-hidden relative",
            children: [
              (0, s.jsx)("div", {
                className:
                  "absolute left-0 top-0 w-20 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none",
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute right-0 top-0 w-20 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none",
              }),
              (0, s.jsx)("div", {
                className: "flex animate-scroll-left gap-3 md:gap-6 w-max",
                children: [void 0, void 0, void 0, void 0, void 0].map((t, a) =>
                  e.map((e, t) =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: "flex-shrink-0 flex items-center",
                        children: (0, s.jsx)("div", {
                          className: "flex items-center justify-center",
                          children: (0, s.jsx)("div", {
                            className: "relative z-10 mix-blend-luminosity",
                            children: e.image,
                          }),
                        }),
                      },
                      "".concat(a, "-").concat(t)
                    )
                  )
                ),
              }),
            ],
          }),
        });
      }
    },
    75432: (e, t, a) => {
      "use strict";
      a.d(t, { TokenProvider: () => m, r: () => h });
      var s = a(95155),
        l = a(12115),
        r = a(53031),
        i = a(2145),
        n = a(50090),
        c = a(61046),
        o = a(54332);
      let x = {
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
      function d(e, t) {
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
      let p = (0, l.createContext)(void 0);
      function m(e) {
        var t;
        let { children: a } = e,
          [m, h] = (0, l.useReducer)(d, x),
          f = (0, r.U)(),
          { address: u } = (0, i.F)(),
          { setReferralCode: g } = (0, o.T)(),
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
                a = parseFloat(t.tokensAllocated) - parseFloat(t.tokensSold),
                s = {
                  phase: parseInt(t.currentPhase),
                  totalOzSold: parseFloat(t.tokensSold).toLocaleString(),
                  remaining: a.toLocaleString(),
                  ozPrice: t.currentPrice,
                  nextPhaseTarget: 0.01,
                  targetPrice: 1,
                  totalRaised: t.usdRaisedSoFar.toLocaleString(),
                  stageEnded: t.stageEnded,
                };
              JSON.stringify(m.tokenData) !== JSON.stringify(s) &&
                h({ type: "SET_TOKEN_DATA", payload: s }),
                h({ type: "SET_LOADING", payload: !1 });
            } catch (e) {
              h({ type: "SET_ERROR", payload: "Failed to fetch token data" }),
                h({ type: "SET_LOADING", payload: !1 });
            }
          },
          w = async () => {
            try {
              let e = await fetch(
                  ""
                    .concat("https://app.ozakai.xyz", "/user/referral-code/")
                    .concat(u)
                ),
                { referralCode: t } = await e.json();
              g(t);
            } catch (e) {
              console.error(e);
            }
          },
          v = (0, l.useMemo)(() => {
            var e;
            if (
              !m.enterAmount ||
              !(null == (e = m.tokenData) ? void 0 : e.ozPrice) ||
              isNaN(Number(m.enterAmount))
            )
              return "0";
            let t = Number(m.enterAmount),
              a = m.tokenData.ozPrice,
              s = (0, n.yP)(m.selectedCurrency),
              l = 0;
            return ((s === c.Xd ? t * m.ethPrice : t) / a).toLocaleString(
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
          (0, l.useEffect)(() => {
            b();
            let e = setInterval(() => {
              b();
            }, 3e4);
            return () => clearInterval(e);
          }, []),
          (0, l.useEffect)(() => {
            (async () => {
              if (u && f) {
                let e = await (0, n.bq)(f, u);
                "number" == typeof e &&
                  h({ type: "SET_ETH_PRICE", payload: e }),
                  w();
              }
            })();
          }, [u, f]),
          (0, l.useEffect)(() => {
            let e = async () => {
              if (u) {
                let e = (0, n.yP)(m.selectedCurrency);
                h({
                  type: "SET_WALLET_BALANCE",
                  payload: Number(await (0, n.kb)(f, m.selectedCurrency, u, e)),
                });
              }
            };
            u && e();
          }, [u, m.selectedCurrency, f]),
          (0, s.jsx)(p.Provider, {
            value: {
              state: m,
              dispatch: h,
              calculateOzReceived: v,
              fetchTokenData: b,
              setTransactionHash: (e) => {
                h({ type: "SET_TRANSACTION_HASH", payload: e });
              },
            },
            children: a,
          })
        );
      }
      function h() {
        let e = (0, l.useContext)(p);
        if (void 0 === e)
          throw Error("useToken must be used within a TokenProvider");
        return e;
      }
    },
    85262: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => c });
      var s = a(95155),
        l = a(12115),
        r = a(54416),
        i = a(84616);
      let n = [
        {
          id: "when-will-i-receive-my-oz-tokens",
          question: "When can I get $OZ tokens?",
          answer:
            "$OZ is available directly on-chain after launch. There is no presale allocation — you can acquire tokens by trading on supported exchanges once liquidity is live.",
        },
        {
          id: "how-do-i-add-oz-to-metamask",
          question: "How do I add $OZ to MetaMask?",
          answer:
            "Once the token is live, you can add $OZ to MetaMask using the official contract address. We’ll publish the verified address on our website and official channels. Always double-check before importing.",
        },
        {
          id: "how-does-the-referral-bonus-work",
          question: "Is there a referral or bonus program?",
          answer:
            "There is no referral or bonus system tied to token purchases. All users participate equally through open market trading.",
        },
        {
          id: "is-there-a-minimum-or-maximum-purchase",
          question: "Is there a minimum or maximum purchase?",
          answer:
            "There are no fixed limits. You can buy or sell $OZ freely on supported exchanges, depending on available liquidity.",
        },
        {
          id: "is-there-any-lock-up-or-vesting",
          question: "Is there any lock-up or vesting?",
          answer:
            "There is no presale vesting. Token distribution and any vesting schedules (if applicable to team or ecosystem allocations) will be outlined in our tokenomics.",
        },
        {
          id: "how-is-the-token-priced",
          question: "How is the price of $OZ determined?",
          answer:
            "The price of $OZ is determined by market supply and demand once trading begins. There are no fixed presale phases or price tiers.",
        },
        {
          id: "can-i-track-token-performance",
          question: "Can I track $OZ performance in real time?",
          answer:
            "Yes — you can track $OZ price, liquidity, and trading activity in real time on supported exchanges and analytics platforms like DEX tools.",
        },
        {
          id: "do-i-need-to-complete-kyc",
          question: "Do I need to complete KYC?",
          answer:
            "No KYC is required to interact with $OZ on decentralized exchanges. However, centralized exchanges may require KYC depending on their policies.",
        },
        {
          id: "where-is-oz-available",
          question: "Where can I trade $OZ?",
          answer:
            "$OZ is available on selected decentralized exchanges at launch. Additional exchange listings may be announced via our official channels.",
        },
        {
          id: "what-is-the-official-oz-token-contract-address",
          question: "What is the official $OZ contract address?",
          answer: "The official contract address is published on our website and verified across all official channels. Always use the official address and beware of scams.",
        },
      ];
      function c() {
        let [e, t] = (0, l.useState)(0),
          a = (a) => {
            t(e === a ? null : a);
          },
          c = (e) => {
            if ("string" == typeof e) {
              let t = /(https?:\/\/[^\s]+)/g,
                a = /([\w.-]+@[\w.-]+\.\w+)/g,
                l = e.split(t);
              return (0, s.jsx)("p", {
                className:
                  "text-[#FFFFFFB2] text-[18px] font-normal leading-[24px] tracking-[-0.28px] xl:tracking-[-0.3px]",
                children: l.map((e, l) =>
                  t.test(e)
                    ? (0, s.jsx)(
                        "a",
                        {
                          href: e,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "text-[#A6FF00] hover:underline transition-colors duration-200",
                          children: e,
                        },
                        l
                      )
                    : e
                        .split(a)
                        .map((e, t) =>
                          a.test(e)
                            ? (0, s.jsx)(
                                "a",
                                {
                                  href: "mailto:".concat(e),
                                  className:
                                    "text-[#A6FF00] hover:underline transition-colors duration-200",
                                  children: e,
                                },
                                "email-".concat(l, "-").concat(t)
                              )
                            : (0, s.jsx)(
                                "span",
                                { children: e },
                                "text-".concat(l, "-").concat(t)
                              )
                        )
                ),
              });
            }
            return e;
          };
        return (0, s.jsx)("div", {
          id: "faqs",
          className:
            "min-h-screen bg-[#000000] my-[30px] md:pt-[120px] md:mb-[60px] px-4",
          children: (0, s.jsxs)("div", {
            className: "max-w-4xl mx-auto",
            children: [
              (0, s.jsxs)("div", {
                className: "text-center mb-6 md:mb-[74px]",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "text-[#A6FF00] text-[24px] font-normal tracking-[-0.48px] md:mb-3",
                    children: "FAQ's",
                  }),
                  (0, s.jsx)("h1", {
                    className:
                      "text-[#ffffff] text-[24px] md:text-[58px] font-semibold leading-[62px] tracking-[-1.16px]",
                    children: "Your Questions, Answered",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "space-y-4 md:space-y-6",
                children: n.map((t, l) => {
                  let n = e === l;
                  return (0, s.jsxs)(
                    "div",
                    {
                      className: "".concat(
                        n ? "faq-item-bg" : "bg-[#FFFFFF1A]",
                        " rounded-xl overflow-hidden transition-all duration-200"
                      ),
                      children: [
                        (0, s.jsxs)("button", {
                          onClick: () => a(l),
                          className:
                            "w-full p-6 text-left flex items-center justify-between cursor-pointer",
                          children: [
                            (0, s.jsx)("span", {
                              className:
                                "text-[#ffffff] text-[18px] font-medium leading-[24px] tracking-[-0.36px] pr-4",
                              children: t.question,
                            }),
                            (0, s.jsx)("div", {
                              className: "flex-shrink-0",
                              children: n
                                ? (0, s.jsx)(r.A, {
                                    className: "w-5 h-5 text-[#ffffff]",
                                  })
                                : (0, s.jsx)(i.A, {
                                    className: "w-5 h-5 text-[#ffffff]",
                                  }),
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "transition-all duration-300 ease-in-out",
                          style: {
                            maxHeight: 500 * !!n,
                            opacity: +!!n,
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingBottom: 24 * !!n,
                            overflow: "hidden",
                          },
                          "aria-hidden": !n,
                          children: (0, s.jsx)("div", {
                            className:
                              "text-[#FFFFFFB2] text-[18px] font-normal leading-[24px] tracking-[-0.36px]",
                            children: c(t.answer),
                          }),
                        }),
                      ],
                    },
                    l
                  );
                }),
              }),
            ],
          }),
        });
      }
    },
    97748: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => s });
      let s = (0, a(17199).U)([
        "function buyTokens(address tokenAddress, uint256 usdAmount, address referrer)",
        "function buyTokensETH(address referrer) payable",
        "function getLatestPrice() returns (uint256)",
      ]);
    },
  },
]);
