import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";
import { NextSeo } from "next-seo";
import HeaderComponent from "../components/custom/sections/headercomponent";

// お客様の情報を利用する目的

// 当社は、お客様から取得した情報を、以下の目的のために利用します。

// 当社サービスに関する登録の受付、お客様の本人確認、認証のため
// お客様の当社サービスの利用履歴を管理するため
// 利用料金の決済のため
// 当社サービスにおけるお客様の行動履歴を分析し、当社サービスの維持改善に役立てるため
// 当社のサービスに関するご案内をするため
// お客様からのお問い合わせに対応するため
// 当社の規約や法令に違反する行為に対応するため
// 当社サービスの変更、提供中止、終了、契約解除をご連絡するため
// 当社規約の変更等を通知するため
// 以上の他、当社サービスの提供、維持、保護及び改善のため
// お客様の趣味嗜好にあわせたターゲティング広告を表示するため
// 広告の配信、表示及び効果測定のため

// 安全管理のために講じた措置

// 当社が、お客様から取得した情報に関して安全管理のために講じた措置につきましては、末尾記載のお問い合わせ先にご連絡をいただきましたら、法令の定めに従い個別にご回答させていただきます。

// 第三者提供

// 当社は、お客様から取得する情報のうち、個人データ（個人情報保護法第２条第６項）に該当するものついては、あらかじめお客様の同意を得ずに、第三者（日本国外にある者を含みます。）に提供しません。
// 但し、次の場合は除きます。

// 個人データの取扱いを外部に委託する場合
// 当社や当社サービスが買収された場合
// 事業パートナーと共同利用する場合（具体的な共同利用がある場合は、その内容を別途公表します。）
// その他、法律によって合法的に第三者提供が許されている場合
// プライバシーポリシーの変更
// 当社は、必要に応じて、このプライバシーポリシーの内容を変更します。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。
// お問い合わせ
// お客様の情報の開示、情報の訂正、利用停止、削除をご希望の場合は、以下のメールアドレスにご連絡ください。
// e-mail
// deeprecommend@gmail.com
// この場合、必ず、運転免許証のご提示等当社が指定する方法により、ご本人からのご請求であることの確認をさせていただきます。なお、情報の開示請求については、開示の有無に関わらず、ご申請時に一件あたり1,000円の事務手数料を申し受けます。
// 事業者の氏名
// 杉本迅
// 事業者の住所
// 大阪府大阪市住吉区苅田5-16-3-201
// 2022年03月26日 制定

export const PrivacyPolicy = () => {
  return (
    <div>
      <Head>
        <title>DeepRecommend｜Privacy Policy</title>
        <meta name="description" content="privacy policy" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <HeaderComponent />
      <div style={{ maxWidth: "750px", margin: "64px auto" }}>
        <h1 style={{ margin: "35px 0 30px" }}>Privacy Policy</h1>
        <article>
          <h2>Information</h2>
          <h5>
            we obtain from you We obtain the following information from you
          </h5>
          <p>
            ・Name (including nicknames and pseudonyms) <br />
            ・Age or date of birth <br />
            ・Gender <br />
            ・E-mail address <br />
            ・Phone number <br />
            ・Address <br />
            ・Photos and videos <br />
            ・Information regarding the customer&lsquo;s payment method, such as
            credit card, bank account, e-money, etc
            <br />
            ・ Customer activity history on our website, including time spent on
            our website, input history, purchase history, etc.
            <br />
            ・Usage history of our apps, such as startup time, input history,
            purchase history, etc.
            <br />
          </p>
        </article>
        <article>
          <h2>Purpose of using customer information</h2>
          <h5>
            The Company will use the information obtained from customers for the
            following purposes
          </h5>
          <p>
            ・To accept registrations for our services, to identify and
            authenticate customers
            <br />
            ・To maintain a customer&lsquo;s usage history of our services
            <br />
            ・For payment of usage fees
            <br />
            ・To analyze customer&lsquo;s activity history on our services and
            use it to maintain and improve our services <br />
            <br />
            ・To provide information about our services
            <br />
            ・To respond to customer inquiries
            <br />
            ・To respond to violations of our terms and conditions or laws and
            regulations
            <br />
            ・To inform you of changes to our services, discontinuation of
            provision, termination, or cancellation of contracts
            <br />
            ・To notify you of changes to our terms and conditions, etc.
            <br />
            ・In addition to the above, to provide, maintain, protect and
            improve our services
            <br />
            ・To display targeted advertising tailored to your interests and
            preferences
            <br />
            ・To deliver and display advertisements and measure their
            effectiveness
            <br />
          </p>
        </article>
        <article>
          <h2>Measures taken for security control</h2>
          <p>
            Regarding the measures we have taken to ensure the security of the
            information we have obtained from our customers, please contact us
            at the address listed at the end of this document, and we will
            respond to you individually in accordance with the law.
          </p>
        </article>
        <article>
          <h2>Provision of Information to Third Parties</h2>
          <p>
            We will not collect personal data (Article 2, Paragraph 6 of the
            Personal Information Protection Law) from customers without
            obtaining the prior consent of the customer. We will not provide
            such information to third parties (including parties located outside
            of Japan) without the prior consent of the customer.
          </p>
          <p>
            ・When the handling of personal data is outsourced In the event of
            an acquisition of our company or our services <br />
            ・ When sharing with business partners (if there are specific joint
            uses, the details will be announced separately) <br />・ In other
            cases where provision to third parties is legally permitted by law
          </p>
        </article>
        <article>
          <h2>Changes to the Privacy Policy</h2>
          <p>
            We will change the content of this Privacy Policy as necessary. In
            this case, the Company will inform or notify the public of the
            effective date and contents of the revised privacy policy by
            appropriate means.
          </p>
        </article>
        <article>
          <h2>Inquiries</h2>
          <p>
            If you wish to disclose your information, correct, stop using, or
            delete your information, please contact us at the following e-mail
            address.
            <p>
              e-mail <br /> deeprecommend@gmail.com
            </p>
            In this case, we will always confirm that the request is made by the
            person in question by presenting a &lsquo; license or other method
            designated by the Company. Please note that an administrative fee of
            1,000 yen will be charged for each request for disclosure of
            information, regardless of whether or not the information is
            disclosed.
          </p>
        </article>
        <article>
          <h2>Name of Business</h2>
          <p>Jin Sugimoto</p>
        </article>
        <article>
          <h2> Address of business </h2>
          <p>
            5-16-3-201 Kanda, Sumiyoshi-ku, Osaka-shi, Osaka March 26, 2022
            Establishment
          </p>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
