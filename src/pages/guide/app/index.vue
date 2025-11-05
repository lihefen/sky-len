<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-07-22 11:00:33
 * @LastEditors: hean
 * @LastEditTime: 2025-11-01 12:18:30
-->
<template>
    <div class="app">
        <div class="banner">
        </div>
        <div class="main">
            <div class="mod mod1">
                <div class="title"></div>
                <div class="content">
                    <div>
                        <div class="text-title">
                            <span class="text-title-icon-1"></span><span>Transparent Pricing</span><span class="text-title-icon-2"></span>
                        </div>
                        <div class="content-item">
                            <span>Effective APR</span> is fully disclosed prior to contract signing and no hidden fees are used.
                        </div>
                        <div class="tips-content">
                            <span class="tips-icon"></span>Your rights ：The right to know ensures that you understand the actual <span>cost of borrowing</span>. 
                        </div>
                    </div>

                    <div>
                        <div class="text-title">
                            <span class="text-title-icon-1"></span><span>Fast Loan</span><span class="text-title-icon-2"></span>
                        </div>
                        <div class="content-item">
                            AI intelligent risk control engine guarantee, after approval,<span> second-level settlement to the account</span>. 
                        </div>
                        <div class="tips-content">
                            <span class="tips-icon"></span>Your rights ：Financial efficiency, ready to respond to emergency funding needs. 
                        </div>
                    </div>

                    <div>
                        <div class="text-title">
                            <span class="text-title-icon-1"></span><span>Fair Access</span><span class="text-title-icon-2"></span>
                        </div>
                        <div class="content-item">
                            The model regularly performs <span>bias audits </span>to ensure that evaluation results are not based on protected characteristics (e.g. race, gender, religion). 
                        </div>
                        <div class="tips-content">
                            <span class="tips-icon"></span> Your rights ：RAI,Ensure that your assessment process is fair and non-discriminatory.
                        </div>
                    </div>
                </div>
            </div>
            <div class="mod mod2">
                <div class="title"></div>
                <div class="sub-title">- AI acceleration and data transparency- </div>
                <div class="swiper-step">
                    <div class="swiper-box">
                        <Swiper  :options="swiperOptionStep">
                            <SwiperSlide>
                                <div class="swiperItem swiperItem1">
                                    <div class="flag"><span>Step1 : Identity security verification</span></div>
                                    <div class="step-content">
                                        <div class="step-content-item">
                                            Mobile phone / BVN / <span>Face Recognition</span>(prevention of fraudulent use).
                                        </div>

                                        <div class="step-content-tips">
                                            Anti-fraud Agent verifies identity authenticity and device security in real time, completing preliminary verification within <span>30 </span><b>seconds. </b>

                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div class="swiperItem swiperItem2">
                                    <div class="flag"><span>Step2 : Authorization, evaluation and quotation</span> </div>
                                    <div class="step-content">
                                        <div class="step-content-item step-content-item-2">
                                            Authorize reading <span>encrypted and desensitized</span> bank/wallet transactions (if not authorized, the amount will be very limited). The system generates your own quotes in real time. 
                                        </div>

                                        <div class="step-content-tips step-content-tips-2">
                                           <b> AI credit portrait</b> construction: customize the quota according to structured data such as transaction frequency and amount fluctuation. Decision-making in <span>60</span> <b>seconds. </b>

                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div class="swiperItem swiperItem3">
                                    <div class="flag"><span>Step3 : Final confirmation and liquidation</span> </div>
                                    <div class="step-content">
                                        <div class="step-content-item">
                                            Carefully check the cost breakdown with the <b>APR details of the contract,</b> sign the electronic contract, and submit the application. 
                                        </div>

                                        <div class="step-content-tips step-content-tips-3">
                                            <span>Second-level liquidation</span> of funds: real-time funds into your bound income account. 

                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </div>
                   
                </div>
                
                <div class="content">
                    <div class="text-title">
                        <span class="text-title-icon-1"></span><span>Your Message Portrait Insight </span><span class="text-title-icon-2"></span>
                    </div>

                    <div class="tips-content">
                        <span class="tips-icon"></span>Your rights ：Financial efficiency, ready to respond to emergency funding needs. 
                    </div>
                </div>
            </div>
            <div class="mod mod3">
                <div class="title"></div>
                <div class="sub-title">- Effective Cost and Staging Flexibility- </div>
                <div class="content">
                   <div>
                        <div class="child-title">Cost Structure And Transparency</div>
                        <div>
                            <div class="text-title">
                                <span class="text-title-icon-1"></span><span>Total Cost Component</span><span class="text-title-icon-2"></span>
                            </div>
                            <div class="content-item">
                            <span> Service fee/management fee</span> (deducted or amortized at time of loan),<span> channel/payment fee </span>(if applicable). 
                            </div>
                            <div class="tips-content">
                                Total Cost = Service Fee/Management Fee + Access Fee
                            </div>
                        </div>

                        <div>
                            <div class="text-title">
                                <span class="text-title-icon-1"></span><span>Effective Years Rate</span><span class="text-title-icon-2"></span>
                            </div>
                            <div class="content-item">
                                <span>Effective APR</span> is calculated in strict compliance with regulatory requirements and disclosed prominently in the contract. 
                            </div>
                            <div class="tips-content">
                               <span> There are no hidden costs.</span> APR is the only measure of borrowing costs. 
                            </div>
                        </div>

                        <div>
                            <div class="text-title">
                                <span class="text-title-icon-1"></span><span>Rate Phasing Mechanism </span><span class="text-title-icon-2"></span>
                            </div>
                            <div class="content-item">
                                <span>Bronze/Sliver:</span> The service charge is<span> deducted in advance.Gold/Platinum: </span>You can choose to apportion part of the service fee to each repayment period to reduce the pressure on the first installment. 
                            </div>
                            <div class="tips-content">
                                Note: The total cost of apportioned service fees may increase slightly due to administrative costs, subject to quotation.
                            </div>
                        </div>
                   </div>

                   <div>
                        <div class="child-title">Repayment Method and Operation Guide</div>
                        <div>
                            <div class="text-title">
                                <span class="text-title-icon-1"></span><span>Automatic Deduction</span><span class="text-title-icon-2"></span>
                            </div>
                            <div class="content-item">
                                It is recommended to ensure that the bound account balance is sufficient 1 - 2 days before the due date. 
                            </div>
                        </div>

                        <div>
                            <div class="text-title">
                                <span class="text-title-icon-1"></span><span>Exclusive Virtual Account</span><span class="text-title-icon-2"></span>
                            </div>
                            <div class="content-item">
                                Your App will form a <span>permanent and unique virtual account</span> that holds all bank/wallet transfers. 
                            </div>
                        </div>

                        <div>
                            <div class="text-title">
                                <span class="text-title-icon-1"></span><span>Manual payment</span><span class="text-title-icon-2"></span>
                            </div>
                            <div class="content-item">
                                After the automatic deduction fails, a new payment link or USSD code can be created in the App by clicking on it. Please operate as soon as possible to avoid late payment. 
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <div class="mod mod4">
                <div class="title"></div>
                <div class="content">
                    <div class="t1"></div>
                    <div class="table-wrap">
                        <table>
                            <tr>
                                <td>
                                    Class
                                </td>
                                <td>
                                    Rate Policy
                                </td>
                                <td>
                                    exclusive rights and interests 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Bronze
                                </td>
                                <td>
                                    standard ratest be restocked, we fund you in the time of a coffee break.”
                                </td>
                                <td>
                                    --
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Sliver
                                </td>
                                <td>
                                    Rates decreased<br/> slightly 
                                </td>
                                <td>
                                    Rate installment <br/>request permission
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Gold
                                </td>
                                <td>
                                    Rates further<br/> reduced
                                </td>
                                <td>
                                    Priority Audit Channel,<br/> Delay Negotiation Agent
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Platinum<br/>
                                    & Diamond
                                </td>
                                <td>
                                    Custom Lowest<br/> Price
                                </td>
                                <td>
                                    Exclusive AI financial advisor Agent (provides budget and repayment optimization advice), lifetime discount coupons. 
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="content-item">
                        Term & Limit: Continuously increase the term and limit according to the user level. 
                    </div>

                    <div>
                        <div class="t2"></div>
                        <div class="text-title">
                            <span class="text-title-icon-1"></span><span>Grace Strategy</span><span class="text-title-icon-2"></span>
                        </div>
                        <div class="content-item">
                            There is a short grace period after expiration. Please pay as soon as possible during this period. 
                        </div>

                        <div class="text-title">
                            <span class="text-title-icon-1"></span><span>Information Maintenance Costs</span><span class="text-title-icon-2"></span>
                        </div>
                        <div class="content-item">
                            Emphasis is placed on <span>maintaining your good information records</span>. There is a strict cap on fees and a step-by-step reduction in early and early years. 
                        </div>

                        <div class="text-title">
                            <span class="text-title-icon-1"></span><span>Signal Recovery Program </span><span class="text-title-icon-2"></span>
                        </div>
                        <div class="content-item">
                            For those with a <span>slightly</span> overdue record, as long as you continue to make regular payments, the system will initiate <span>a repair process to offset</span> some of the impact of the bad record on your rating. 
                        </div>
                    </div>
                </div>
            </div>

            <div class="mod mod5">
                <div class="title"></div>
                <div class="content">
                    <div class="t3"></div>

                    <div>
                        <div class="text-title">
                            <span class="text-title-icon-1"></span><span>AI Bias Audit </span><span class="text-title-icon-2"></span>
                        </div>
                        <div class="content-item">
                            The model is subject to regular <span>internal and external independent audits</span> to ensure that there is no discriminatory bias in the credit decision-making process. The deployment will be automatically updated in T+1 cycles as new fraud patterns are discovered by the model. 
                        </div>

                        <div class="text-title">
                            <span class="text-title-icon-1"></span><span>Data desensitization</span><span class="text-title-icon-2"></span>
                        </div>
                        <div class="content-item">
                            Authorization streams are only used to extract <span>structured features</span> (frequency, amount, time period) and do not access, store, or analyze specific objects of your transactions, messages, or personal conversations. 
                        </div>

                        <div class="text-title">
                            <span class="text-title-icon-1"></span><span>Fraud and Security</span><span class="text-title-icon-2"></span>
                        </div>
                        <div class="content-item">
                            Multi-modal data analysis, equipment fingerprint tracking, <span>real-time atlas correlation analysis</span>, all-round guarantee of fund and account security. 
                        </div>
                    </div>

                    <div class="t4"></div>

                    <div>
                        <div class="text-title">
                            <span class="text-title-icon-1"></span><span>AI Agent Service</span><span class="text-title-icon-2"></span>
                        </div>
                        <div class="content-item">
                            7 x 24 hours, 80% of daily consultations and repayment operations handled. 
                        </div>

                        <div class="tips-content">
                            Any advice provided by AI Agent involving <span>contract or legal amount</span> must be subject to <span>manual customer service or formal contract</span>. 
                        </div>
                    </div>

                    <div>
                        <div class="text-title">
                            <span class="text-title-icon-1"></span><span>Manual Customer Service</span><span class="text-title-icon-2"></span>
                        </div>
                        <div class="content-item">
                            Weekdays 09:00-18:00.
                        </div>

                        <div class="tips-content">
                            Focus on complex cases, complaints and dispute resolution.
                        </div>
                    </div>

                    <div>
                        <div class="text-title">
                            <span class="text-title-icon-1"></span><span>Complaints and Reviews</span><span class="text-title-icon-2"></span>
                        </div>
                        <div class="content-item">
                            Users who reject AI applications have the right to submit complaints through the App and<span> apply for Human-in-the-Loop review</span>. 
                        </div>

                        <div class="tips-content">
                            In case of emergency such as<span> account lock and abnormal funds,</span> please dial the manual special line first. 
                        </div>
                    </div>

                    <div>
                        <div class="text-title">
                            <span class="text-title-icon-1"></span><span>External supervision</span><span class="text-title-icon-2"></span>
                        </div>
                        <div class="content-item">
                            If you are dissatisfied with the outcome of the proceedings, you have the right to lodge a formal complaint with the Nigeria FCCPC. 
                        </div>

                        <div class="tips-content">
                            This is your ultimate consumer protection.
                        </div>
                    </div>

                    <div class="t5"></div>
                    <dl>
                        <dt>
                        </dt>
                        <dd>
                           <span> Please do what you can. </span>Reasonably evaluate their repayment ability to avoid excessive debt. 
                        </dd>
                    </dl>

                    <dl>
                        <dt>
                        </dt>
                        <dd>
                            Fees, quotas and deadlines are subject to the <span>final electronic contract</span> displayed in real-time by the App. 
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                        </dt>
                        <dd>
                            These guidelines are only intended to enhance the user experience and do not constitute a credit commitment. 
                        </dd>
                    </dl>

                    <dl>
                        <dt>
                        </dt>
                        <dd>
                            All lending is governed by Nigeria law.
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>