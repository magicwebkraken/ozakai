"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4079],{21330:(e,t,o)=>{o(72969)},25322:(e,t,o)=>{var i=o(80643),a=o(67543),r=o(97265),n=o(54166);let s=(0,i.AH)`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-object-fit='cover']) img {
    object-fit: cover;
    object-position: center center;
  }

  :host([data-object-fit='contain']) img {
    object-fit: contain;
    object-position: center center;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;var c=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let u=class extends i.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,(0,i.qy)`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};u.styles=[r.W5,r.ck,s],c([(0,a.MZ)()],u.prototype,"src",void 0),c([(0,a.MZ)()],u.prototype,"alt",void 0),c([(0,a.MZ)()],u.prototype,"size",void 0),c([(0,a.MZ)()],u.prototype,"objectFit",void 0),u=c([(0,n.E)("wui-image")],u)},35331:(e,t,o)=>{o.d(t,{GN:()=>I});var i=o(43217),a=o(70799),r=o(18227),n=o(60500),s=o(45312),c=o(74605),u=o(54846),l=o(76610),d=o(35558),p=o(3906);let g={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,o){let i=g.getGasPriceInEther(t,o);return r.S.bigNumber(e).times(i).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:o,toTokenAmount:i}){let a=r.S.bigNumber(e).times(t),n=r.S.bigNumber(i).times(o);return a.minus(n).div(a).times(100).toNumber()},getMaxSlippage(e,t){let o=r.S.bigNumber(e).div(100);return r.S.multiply(t,o).toNumber()},getProviderFee:(e,t=.0085)=>r.S.bigNumber(e).times(t).toString(),isInsufficientNetworkTokenForGas:(e,t)=>!!r.S.bigNumber(e).eq(0)||r.S.bigNumber(r.S.bigNumber(t||"0")).gt(e),isInsufficientSourceTokenForSwap(e,t,o){let i=o?.find(e=>e.address===t)?.quantity?.numeric;return r.S.bigNumber(i||"0").lt(e)},getToTokenAmount({sourceToken:e,toToken:t,sourceTokenPrice:o,toTokenPrice:i,sourceTokenAmount:a}){if("0"===a||!e||!t)return"0";let n=e.decimals,s=t.decimals;if(i<=0)return"0";let c=r.S.bigNumber(a).times(.0085),u=r.S.bigNumber(a).minus(c).times(r.S.bigNumber(10).pow(n)),l=r.S.bigNumber(o).div(i),d=n-s;return u.times(l).div(r.S.bigNumber(10).pow(d)).div(r.S.bigNumber(10).pow(s)).toFixed(s).toString()}};var w=o(92555),m=o(11076),T=o(79277),k=o(11501),h=o(90906),v=o(14796),b=o(54252),f=o(32836),S=o(19628),y=o(5517);let P={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:l.oU.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},A=(0,i.BX)(P),x={state:A,subscribe:e=>(0,i.B1)(A,()=>e(A)),subscribeKey:(e,t)=>(0,a.u$)(A,e,t),getParams(){let e=h.W.state.activeCaipAddress,t=d.w.getPlainAddress(e),o=(0,u.K1)(),i=b.a.getConnectorId(h.W.state.activeChain);if(!t)throw Error("No address found to swap the tokens from.");let a=!A.toToken?.address||!A.toToken?.decimals,s=!A.sourceToken?.address||!A.sourceToken?.decimals||!r.S.bigNumber(A.sourceTokenAmount).gt(0),c=!A.sourceTokenAmount;return{networkAddress:o,fromAddress:t,fromCaipAddress:e,sourceTokenAddress:A.sourceToken?.address,toTokenAddress:A.toToken?.address,toTokenAmount:A.toTokenAmount,toTokenDecimals:A.toToken?.decimals,sourceTokenAmount:A.sourceTokenAmount,sourceTokenDecimals:A.sourceToken?.decimals,invalidToToken:a,invalidSourceToken:s,invalidSourceTokenAmount:c,availableToSwap:e&&!a&&!s&&!c,isAuthConnector:i===n.o.CONNECTOR_ID.AUTH}},setSourceToken(e){if(!e){A.sourceToken=e,A.sourceTokenAmount="",A.sourceTokenPriceInUSD=0;return}A.sourceToken=e,I.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){A.sourceTokenAmount=e},setToToken(e){if(!e){A.toToken=e,A.toTokenAmount="",A.toTokenPriceInUSD=0;return}A.toToken=e,I.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){A.toTokenAmount=e?r.S.formatNumberToLocalString(e,6):""},async setTokenPrice(e,t){let o=A.tokensPriceMap[e]||0;o||(A.loadingPrices=!0,o=await I.getAddressPrice(e)),"sourceToken"===t?A.sourceTokenPriceInUSD=o:"toToken"===t&&(A.toTokenPriceInUSD=o),A.loadingPrices&&(A.loadingPrices=!1),I.getParams().availableToSwap&&I.swapTokens()},switchTokens(){if(A.initializing||!A.initialized)return;let e=A.toToken?{...A.toToken}:void 0,t=A.sourceToken?{...A.sourceToken}:void 0,o=e&&""===A.toTokenAmount?"1":A.toTokenAmount;I.setSourceToken(e),I.setToToken(t),I.setSourceTokenAmount(o),I.setToTokenAmount(""),I.swapTokens()},resetState(){A.myTokensWithBalance=P.myTokensWithBalance,A.tokensPriceMap=P.tokensPriceMap,A.initialized=P.initialized,A.sourceToken=P.sourceToken,A.sourceTokenAmount=P.sourceTokenAmount,A.sourceTokenPriceInUSD=P.sourceTokenPriceInUSD,A.toToken=P.toToken,A.toTokenAmount=P.toTokenAmount,A.toTokenPriceInUSD=P.toTokenPriceInUSD,A.networkPrice=P.networkPrice,A.networkTokenSymbol=P.networkTokenSymbol,A.networkBalanceInUSD=P.networkBalanceInUSD,A.inputError=P.inputError,A.myTokensWithBalance=P.myTokensWithBalance},resetValues(){let{networkAddress:e}=I.getParams(),t=A.tokens?.find(t=>t.address===e);I.setSourceToken(t),I.setToToken(void 0)},getApprovalLoadingState:()=>A.loadingApprovalTransaction,clearError(){A.transactionError=void 0},async initializeState(){if(!A.initializing){if(A.initializing=!0,!A.initialized)try{await I.fetchTokens(),A.initialized=!0}catch(e){A.initialized=!1,y.P.showError("Failed to initialize swap"),S.I.goBack()}A.initializing=!1}},async fetchTokens(){let{networkAddress:e}=I.getParams();await I.getTokenList(),await I.getNetworkTokenPrice(),await I.getMyTokensWithBalance();let t=A.tokens?.find(t=>t.address===e);t&&(A.networkTokenSymbol=t.symbol,I.setSourceToken(t),I.setSourceTokenAmount("1"))},async getTokenList(){let e=await p.s.getTokenList();A.tokens=e,A.popularTokens=e.sort((e,t)=>e.symbol<t.symbol?-1:+(e.symbol>t.symbol)),A.suggestedTokens=e.filter(e=>!!l.oU.SWAP_SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(e){let t=A.tokensPriceMap[e];if(t)return t;let o=await k.T.fetchTokenPrice({addresses:[e]}),i=o?.fungibles||[],a=[...A.tokens||[],...A.myTokensWithBalance||[]],r=a?.find(t=>t.address===e)?.symbol,n=parseFloat((i.find(e=>e.symbol.toLowerCase()===r?.toLowerCase())?.price||0).toString());return A.tokensPriceMap[e]=n,n},async getNetworkTokenPrice(){let{networkAddress:e}=I.getParams(),t=await k.T.fetchTokenPrice({addresses:[e]}).catch(()=>(y.P.showError("Failed to fetch network token price"),{fungibles:[]})),o=t.fungibles?.[0],i=o?.price.toString()||"0";A.tokensPriceMap[e]=parseFloat(i),A.networkTokenSymbol=o?.symbol||"",A.networkPrice=i},async getMyTokensWithBalance(e){let t=await c.Z.getMyTokensWithBalance(e),o=p.s.mapBalancesToSwapTokens(t);o&&(await I.getInitialGasPrice(),I.setBalances(o))},setBalances(e){let{networkAddress:t}=I.getParams(),o=h.W.state.activeCaipNetwork;if(!o)return;let i=e.find(e=>e.address===t);e.forEach(e=>{A.tokensPriceMap[e.address]=e.price||0}),A.myTokensWithBalance=e.filter(e=>e.address.startsWith(o.caipNetworkId)),A.networkBalanceInUSD=i?r.S.multiply(i.quantity.numeric,i.price).toString():"0"},async getInitialGasPrice(){let e=await p.s.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch(h.W.state?.activeCaipNetwork?.chainNamespace){case n.o.CHAIN.SOLANA:return A.gasFee=e.standard??"0",A.gasPriceInUSD=r.S.multiply(e.standard,A.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(A.gasFee),gasPriceInUSD:Number(A.gasPriceInUSD)};case n.o.CHAIN.EVM:default:let t=e.standard??"0",o=BigInt(t),i=BigInt(15e4),a=g.getGasPriceInUSD(A.networkPrice,i,o);return A.gasFee=t,A.gasPriceInUSD=a,{gasPrice:o,gasPriceInUSD:a}}},async swapTokens(){let e=m.U.state.address,t=A.sourceToken,o=A.toToken,i=r.S.bigNumber(A.sourceTokenAmount).gt(0);if(i||I.setToTokenAmount(""),!o||!t||A.loadingPrices||!i)return;A.loadingQuote=!0;let a=r.S.bigNumber(A.sourceTokenAmount).times(10**t.decimals).round(0);try{let i=await k.T.fetchSwapQuote({userAddress:e,from:t.address,to:o.address,gasPrice:A.gasFee,amount:a.toString()});A.loadingQuote=!1;let n=i?.quotes?.[0]?.toAmount;if(!n)return void T.h.open({shortMessage:"Incorrect amount",longMessage:"Please enter a valid amount"},"error");let s=r.S.bigNumber(n).div(10**o.decimals).toString();I.setToTokenAmount(s),I.hasInsufficientToken(A.sourceTokenAmount,t.address)?A.inputError="Insufficient balance":(A.inputError=void 0,I.setTransactionDetails())}catch(e){A.loadingQuote=!1,A.inputError="Insufficient balance"}},async getTransaction(){let{fromCaipAddress:e,availableToSwap:t}=I.getParams(),o=A.sourceToken,i=A.toToken;if(e&&t&&o&&i&&!A.loadingQuote)try{let t;return A.loadingBuildTransaction=!0,t=await p.s.fetchSwapAllowance({userAddress:e,tokenAddress:o.address,sourceTokenAmount:A.sourceTokenAmount,sourceTokenDecimals:o.decimals})?await I.createSwapTransaction():await I.createAllowanceTransaction(),A.loadingBuildTransaction=!1,A.fetchError=!1,t}catch(e){S.I.goBack(),y.P.showError("Failed to check allowance"),A.loadingBuildTransaction=!1,A.approvalTransaction=void 0,A.swapTransaction=void 0,A.fetchError=!0;return}},async createAllowanceTransaction(){let{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:o}=I.getParams();if(e&&o){if(!t)throw Error("createAllowanceTransaction - No source token address found.");try{let i=await k.T.generateApproveCalldata({from:t,to:o,userAddress:e}),a=d.w.getPlainAddress(i.tx.from);if(!a)throw Error("SwapController:createAllowanceTransaction - address is required");let r={data:i.tx.data,to:a,gasPrice:BigInt(i.tx.eip155.gasPrice),value:BigInt(i.tx.value),toAmount:A.toTokenAmount};return A.swapTransaction=void 0,A.approvalTransaction={data:r.data,to:r.to,gasPrice:r.gasPrice,value:r.value,toAmount:r.toAmount},{data:r.data,to:r.to,gasPrice:r.gasPrice,value:r.value,toAmount:r.toAmount}}catch(e){S.I.goBack(),y.P.showError("Failed to create approval transaction"),A.approvalTransaction=void 0,A.swapTransaction=void 0,A.fetchError=!0;return}}},async createSwapTransaction(){let{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:o}=I.getParams(),i=A.sourceToken,a=A.toToken;if(!t||!o||!i||!a)return;let r=v.x.parseUnits(o,i.decimals)?.toString();try{let o=await k.T.generateSwapCalldata({userAddress:t,from:i.address,to:a.address,amount:r,disableEstimate:!0}),n=i.address===e,s=BigInt(o.tx.eip155.gas),c=BigInt(o.tx.eip155.gasPrice),u=d.w.getPlainAddress(o.tx.to);if(!u)throw Error("SwapController:createSwapTransaction - address is required");let l={data:o.tx.data,to:u,gas:s,gasPrice:c,value:n?BigInt(r??"0"):BigInt("0"),toAmount:A.toTokenAmount};return A.gasPriceInUSD=g.getGasPriceInUSD(A.networkPrice,s,c),A.approvalTransaction=void 0,A.swapTransaction=l,l}catch(e){S.I.goBack(),y.P.showError("Failed to create transaction"),A.approvalTransaction=void 0,A.swapTransaction=void 0,A.fetchError=!0;return}},onEmbeddedWalletApprovalSuccess(){y.P.showLoading("Approve limit increase in your wallet"),S.I.replace("SwapPreview")},async sendTransactionForApproval(e){let{fromAddress:t,isAuthConnector:o}=I.getParams();A.loadingApprovalTransaction=!0,o?S.I.pushTransactionStack({onSuccess:I.onEmbeddedWalletApprovalSuccess}):y.P.showLoading("Approve limit increase in your wallet");try{await v.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:n.o.CHAIN.EVM}),await I.swapTokens(),await I.getTransaction(),A.approvalTransaction=void 0,A.loadingApprovalTransaction=!1}catch(e){A.transactionError=e?.shortMessage,A.loadingApprovalTransaction=!1,y.P.showError(e?.shortMessage||"Transaction error"),f.E.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:e?.shortMessage||e?.message||"Unknown",network:h.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:I.state.sourceToken?.symbol||"",swapToToken:I.state.toToken?.symbol||"",swapFromAmount:I.state.sourceTokenAmount||"",swapToAmount:I.state.toTokenAmount||"",isSmartAccount:(0,u.lj)(n.o.CHAIN.EVM)===s.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){if(!e)return;let{fromAddress:t,toTokenAmount:o,isAuthConnector:i}=I.getParams();A.loadingTransaction=!0;let a=`Swapping ${A.sourceToken?.symbol} to ${r.S.formatNumberToLocalString(o,3)} ${A.toToken?.symbol}`,c=`Swapped ${A.sourceToken?.symbol} to ${r.S.formatNumberToLocalString(o,3)} ${A.toToken?.symbol}`;i?S.I.pushTransactionStack({onSuccess(){S.I.replace("Account"),y.P.showLoading(a),x.resetState()}}):y.P.showLoading("Confirm transaction in your wallet");try{let o=[A.sourceToken?.address,A.toToken?.address].join(","),a=await v.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:n.o.CHAIN.EVM});return A.loadingTransaction=!1,y.P.showSuccess(c),f.E.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:h.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:I.state.sourceToken?.symbol||"",swapToToken:I.state.toToken?.symbol||"",swapFromAmount:I.state.sourceTokenAmount||"",swapToAmount:I.state.toTokenAmount||"",isSmartAccount:(0,u.lj)(n.o.CHAIN.EVM)===s.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),x.resetState(),i||S.I.replace("Account"),x.getMyTokensWithBalance(o),a}catch(e){A.transactionError=e?.shortMessage,A.loadingTransaction=!1,y.P.showError(e?.shortMessage||"Transaction error"),f.E.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:e?.shortMessage||e?.message||"Unknown",network:h.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:I.state.sourceToken?.symbol||"",swapToToken:I.state.toToken?.symbol||"",swapFromAmount:I.state.sourceTokenAmount||"",swapToAmount:I.state.toTokenAmount||"",isSmartAccount:(0,u.lj)(n.o.CHAIN.EVM)===s.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken:(e,t)=>g.isInsufficientSourceTokenForSwap(e,t,A.myTokensWithBalance),setTransactionDetails(){let{toTokenAddress:e,toTokenDecimals:t}=I.getParams();e&&t&&(A.gasPriceInUSD=g.getGasPriceInUSD(A.networkPrice,BigInt(A.gasFee),BigInt(15e4)),A.priceImpact=g.getPriceImpact({sourceTokenAmount:A.sourceTokenAmount,sourceTokenPriceInUSD:A.sourceTokenPriceInUSD,toTokenPriceInUSD:A.toTokenPriceInUSD,toTokenAmount:A.toTokenAmount}),A.maxSlippage=g.getMaxSlippage(A.slippage,A.toTokenAmount),A.providerFee=g.getProviderFee(A.sourceTokenAmount))}},I=(0,w.X)(x)},39151:(e,t,o)=>{var i=o(80643),a=o(67543),r=o(6307),n=o(9431),s=o(32401);o(72969);var c=o(97265),u=o(54166);let l=(0,i.AH)`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var d=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let p=class extends i.WF{constructor(){super(...arguments),this.inputElementRef=(0,s._)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){let e=`wui-padding-right-${this.inputRightPadding}`,t={[`wui-size-${this.size}`]:!0,[e]:!!this.inputRightPadding};return(0,i.qy)`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,s.K)(this.inputElementRef)}
        class=${(0,r.H)(t)}
        type=${this.type}
        enterkeyhint=${(0,n.J)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${(0,n.J)(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?(0,i.qy)`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};p.styles=[c.W5,c.fD,l],d([(0,a.MZ)()],p.prototype,"size",void 0),d([(0,a.MZ)()],p.prototype,"icon",void 0),d([(0,a.MZ)({type:Boolean})],p.prototype,"disabled",void 0),d([(0,a.MZ)()],p.prototype,"placeholder",void 0),d([(0,a.MZ)()],p.prototype,"type",void 0),d([(0,a.MZ)()],p.prototype,"keyHint",void 0),d([(0,a.MZ)()],p.prototype,"value",void 0),d([(0,a.MZ)()],p.prototype,"inputRightPadding",void 0),d([(0,a.MZ)()],p.prototype,"tabIdx",void 0),p=d([(0,u.E)("wui-input-text")],p)},60622:(e,t,o)=>{var i=o(80643),a=o(67543);o(25322),o(98750);var r=o(97265),n=o(54166);o(89556);let s=(0,i.AH)`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var c=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let u=class extends i.WF{constructor(){super(...arguments),this.text=""}render(){return(0,i.qy)`
      <button>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?(0,i.qy)`<wui-image src=${this.imageSrc}></wui-image>`:(0,i.qy)`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};u.styles=[r.W5,r.fD,s],c([(0,a.MZ)()],u.prototype,"imageSrc",void 0),c([(0,a.MZ)()],u.prototype,"text",void 0),u=c([(0,n.E)("wui-token-button")],u)},65759:(e,t,o)=>{o(39151)}}]);