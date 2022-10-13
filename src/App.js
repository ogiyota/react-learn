import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';




let num = Math.floor( Math.random() * 54);

const answer =[
  "○",
  "×"
]

const aaa = [
  {C : "法令の効力について" , 
  Q : "法律の内容を一般国民に広く知らせるには、法律の公布から施行まで一定の期間を置くことが必要であるため、公布日から直ちに法律を施行することはできない。",
  A :answer[1] },
  {C : "法令の効力について" ,
   Q : "法律の効力発生日を明確にする必要があるため、公布日とは別に、必ず施行期日を定めなければならない。",
   A :answer[1] },
  {C : "法令の効力について" , 
  Q : "日本国の法令は、その領域内でのみ効力を有し、外国の領域内や公海上においては、日本国の船舶および航空機内であっても、その効力を有しない。",
  A :answer[1] },
  {C : "法令の効力について" , 
  Q : "一般法に優先する特別法が制定され、その後に一般法が改正されて当該特別法が適用される範囲について一般法の規定が改められた場合には、当該改正部分については、後法である一般法が優先して適用され、当該特別法は効力を失う。",
  A :answer[1] },
  {C : "法令の効力について" ,
   Q : "法律の有効期間を当該法律の中で明確に定めている場合には、原則としてその時期の到来により当該法律の効力は失われる。",
  A :answer[0] },
  {C: "インフルエンザウイルス感染症まん延防止のため、政府の行政指導により集団的な予防接種が実施されたところ、それに伴う重篤な副反応により死亡したＸの遺族が、国を相手取り損害賠償もしくは損失補償を請求する訴訟を提起した（予防接種と副反応の因果関係は確認済み）場合に、これまで裁判例や学説において主張された憲法解釈論の例について。",
    Q : "予防接種に伴う特別な犠牲については、財産権の特別犠牲に比べて不利に扱う理由はなく、後者の法理を類推適用すべきである。",
    A :answer[0] },
  {C: "インフルエンザウイルス感染症まん延防止のため、政府の行政指導により集団的な予防接種が実施されたところ、それに伴う重篤な副反応により死亡したＸの遺族が、国を相手取り損害賠償もしくは損失補償を請求する訴訟を提起した（予防接種と副反応の因果関係は確認済み）場合に、これまで裁判例や学説において主張された憲法解釈論の例について。",
    Q : "予防接種自体は、結果として違法だったとしても無過失である場合には、いわゆる谷間の問題であり、立法による解決が必要である。",
    A :answer[0] },
  {C: "インフルエンザウイルス感染症まん延防止のため、政府の行政指導により集団的な予防接種が実施されたところ、それに伴う重篤な副反応により死亡したＸの遺族が、国を相手取り損害賠償もしくは損失補償を請求する訴訟を提起した（予防接種と副反応の因果関係は確認済み）場合に、これまで裁判例や学説において主張された憲法解釈論の例について。",
    Q : "予防接種に伴い、公共の利益のために、生命・身体に対する特別な犠牲を被った者は、人格的自律権の一環として、損失補償を請求できる。",
    A :answer[0] },
  {C: "インフルエンザウイルス感染症まん延防止のため、政府の行政指導により集団的な予防接種が実施されたところ、それに伴う重篤な副反応により死亡したＸの遺族が、国を相手取り損害賠償もしくは損失補償を請求する訴訟を提起した（予防接種と副反応の因果関係は確認済み）場合に、これまで裁判例や学説において主張された憲法解釈論の例について。",
    Q : "予防接種による違法な結果について、過失を認定することは原理的に不可能なため、損害賠償を請求する余地はないというべきである。",
    A :answer[1] },
  {C: "インフルエンザウイルス感染症まん延防止のため、政府の行政指導により集団的な予防接種が実施されたところ、それに伴う重篤な副反応により死亡したＸの遺族が、国を相手取り損害賠償もしくは損失補償を請求する訴訟を提起した（予防接種と副反応の因果関係は確認済み）場合に、これまで裁判例や学説において主張された憲法解釈論の例について。",
    Q : "財産権の侵害に対して損失補償が出され得る以上、予防接種がひき起こした生命・身体への侵害についても同様に扱うのは当然である。",
    A :answer[0] },

  {C: "最高裁判所の判例に照らした捜査とプライバシーについて",
     Q : "個人の容ぼうや姿態は公道上などで誰もが容易に確認できるものであるから、個人の私生活上の自由の一つとして、警察官によって本人の承諾なしにみだりにその容ぼう・姿態を撮影されない自由を認めることはできない。",
    A :answer[1] },
  {C: "最高裁判所の判例に照らした捜査とプライバシーについて",
    Q : "憲法は、住居、書類および所持品について侵入、捜索および押収を受けることのない権利を定めるが、その保障対象には、住居、書類および所持品に限らずこれらに準ずる私的領域に侵入されることのない権利が含まれる。",
    A :answer[0] },
  {C: "最高裁判所の判例に照らした捜査とプライバシーについて",
    Q : "電話傍受は、通信の秘密や個人のプライバシーを侵害するが、必要性や緊急性が認められれば、電話傍受以外の方法によって当該犯罪に関する重要かつ必要な証拠を得ることが可能な場合であっても、これを行うことが憲法上広く許容される。",
    A :answer[1] },
  {C: "最高裁判所の判例に照らした捜査とプライバシーについて",
    Q : "速度違反車両の自動撮影を行う装置により運転者本人の容ぼうを写真撮影することは憲法上許容されるが、運転者の近くにいるため除外できないことを理由としてであっても、同乗者の容ぼうまで撮影することは許されない。",
    A :answer[1] },
  {C: "最高裁判所の判例に照らした捜査とプライバシーについて",
    Q : "GPS 端末を秘かに車両に装着する捜査手法は、車両使用者の行動を継続的・網羅的に把握するものであるが、公道上の所在を肉眼で把握したりカメラで撮影したりする手法と本質的に異ならず、憲法が保障する私的領域を侵害するものではない。",
    A :answer[1] },
  {C: "地方公共団体がその土地を神社の敷地として無償で提供することの合憲性について",
    Q : "国または地方公共団体が国公有地を無償で宗教的施設の敷地として提供する行為は、一般に、当該宗教的施設を設置する宗教団体等に対する便宜の供与として、憲法 89 条＊との抵触が問題となる行為であるといわなければならない。＊　憲法 89 条公金その他の公の財産は、宗教上の組織若しくは団体の使用、便益若しくは維持のため、又は公の支配に属しない慈善、教育若しくは博愛の事業に対し、これを支出し、又はその利用に供してはならない。",
    A :answer[0] },
  {C: "地方公共団体がその土地を神社の敷地として無償で提供することの合憲性について",
    Q : "一般的には宗教的施設としての性格を有する施設であっても、同時に歴史的、文化財的な保護の対象となったり、観光資源、国際親善、地域の親睦の場としての意義を有するなど、文化的・社会的な価値に着目して国公有地に設置されている場合もあり得る。",
    A :answer[0] },
  {C: "地方公共団体がその土地を神社の敷地として無償で提供することの合憲性について",
    Q : "日本では、多くの国民に宗教意識の雑居性が認められ、国民の宗教的関心が必ずしも高いとはいえない一方、神社神道には、祭祀儀礼に専念し、他の宗教にみられる積極的な布教・伝道などの対外活動をほとんど行わないという特色がみられる。",
    A :answer[1] },
  {C: "地方公共団体がその土地を神社の敷地として無償で提供することの合憲性について",
    Q : "明治初期以来、一定の社寺領を国等に上知（上地）させ、官有地に編入し、または寄附により受け入れるなどの施策が広く採られたこともあって、国公有地が無償で社寺等の敷地として供される事例が多数生じており、これが解消されないまま残存している例もある。",
    A :answer[0] },
  {C: "地方公共団体がその土地を神社の敷地として無償で提供することの合憲性について",
    Q : "当該神社を管理する氏子集団が、宗教的行事等を行うことを主たる目的とする宗教団体であり、寄附等を集めて当該神社の祭事を行っている場合、憲法 89 条＊の「宗教上の組織若しくは団体」に該当するものと解される。",
    A :answer[0] },
  {C: "法の一般原則に関わる最高裁判所の判決に関する次の記述について",
    Q : "地方公共団体が、将来にわたって継続すべき一定内容の施策を決定した場合、その後社会情勢が変動したとしても、当該施策を変更することは住民や関係者の信頼保護の観点から許されないから、当該施策の変更は、当事者間に形成された信頼関係を不当に破壊するものとして、それにより損害を被る者との関係においては、違法となる。",
    A :answer[1] },
  {C: "法の一般原則に関わる最高裁判所の判決に関する次の記述について",
    Q : "租税法律主義の原則が貫かれるべき租税法律関係においては、租税法規に適合する課税処分について、法の一般原則である信義則の法理の適用がなされることはなく、租税法規の適用における納税者の平等、公平という要請を犠牲にしてもなお保護しなければ正義に反するといえるような特別の事情が存する場合であっても、課税処分が信義則の法理に反するものとして違法となることはない。",
    A :answer[1] },
  {C: "法の一般原則に関わる最高裁判所の判決に関する次の記述について",
    Q : "法の一般原則として権利濫用の禁止が行政上の法律関係において例外的に適用されることがあるとしても、その適用は慎重であるべきであるから、町からの申請に基づき知事がなした児童遊園設置認可処分が行政権の著しい濫用によるものであっても、それが、地域環境を守るという公益上の要請から生じたものである場合には、当該処分が違法とされることはない。",
    A :answer[1] },
  {C: "法の一般原則に関わる最高裁判所の判決に関する次の記述について",
    Q : "地方自治法により、金銭の給付を目的とする普通地方公共団体の権利につきその時効消滅については援用を要しないとされているのは、当該権利の性質上、法令に従い適正かつ画一的にこれを処理することが地方公共団体の事務処理上の便宜および住民の平等的取扱の理念に資するものであり、当該権利について時効援用の制度を適用する必要がないと判断されたことによるものと解されるから、普通地方公共団体に対する債権に関する消滅時効の主張が信義則に反し許されないとされる場合は、極めて限定されるものというべきである。",
    A :answer[0] },
  {C: "法の一般原則に関わる最高裁判所の判決に関する次の記述について",
    Q : "国家公務員の雇傭関係は、私人間の関係とは異なる特別の法律関係において結ばれるものであり、国には、公務の管理にあたって公務員の生命および健康等を危険から保護するよう配慮する義務が認められるとしても、それは一般的かつ抽象的なものにとどまるものであって、国家公務員の公務上の死亡について、国は、法律に規定された補償等の支給を行うことで足り、それ以上に、上記の配慮義務違反に基づく損害賠償義務を負うことはない。",
    A :answer[1] },
  {C: "行政裁量について",
    Q : "教科書検定の審査、判断は、申請図書について、内容が学問的に正確であるか、中立・公正であるか、教科の目標等を達成する上で適切であるか、児童、生徒の心身の発達段階に適応しているか、などの観点から行われる学術的、教育的な専門技術的判断であるから、事柄の性質上、文部大臣（当時）の合理的な裁量に委ねられる。",
    A :answer[0] },
  {C: "行政裁量について",
    Q : "国家公務員に対する懲戒処分において、処分要件にかかる処分対象者の行為に関する事実は、平素から庁内の事情に通暁し、配下職員の指揮監督の衝にあたる者が最もよく把握しうるところであるから、懲戒処分の司法審査にあたり、裁判所は懲戒権者が当該処分に当たって行った事実認定に拘束される。",
    A :answer[1] },
  {C: "行政裁量について",
    Q : "公害健康被害の補償等に関する法律に基づく水俣病の認定は、水俣病の罹患の有無という現在または過去の確定した客観的事実を確認する行為であって、この点に関する処分行政庁の判断はその裁量に委ねられるべき性質のものではない。",
    A :answer[0] },
  {C: "行政裁量について",
    Q : "生活保護法に基づく保護基準が前提とする「最低限度の生活」は、専門的、技術的な見地から客観的に定まるものであるから、保護基準中の老齢加算に係る部分を改定するに際し、最低限度の生活を維持する上で老齢であることに起因する特別な需要が存在するといえるか否かを判断するに当たって、厚生労働大臣に政策的な見地からの裁量権は認められない。",
    A :answer[1] },
  {C: "行政裁量について",
    Q : "学校施設の目的外使用を許可するか否かについては、原則として、管理者の裁量に委ねられており、学校教育上支障があれば使用を許可することができないことは明らかであるが、集会の開催を目的とする使用申請で、そのような支障がないものについては、集会の自由の保障の趣旨に鑑み、これを許可しなければならない。",
    A :answer[1] },
  {C: "行政立法について",
    Q : "国家公務員の退職共済年金受給に伴う退職一時金の利子相当額の返還について定める国家公務員共済組合法の規定において、その利子の利率を政令で定めるよう委任をしていることは、直接に国民の権利義務に変更を生じさせる利子の利率の決定という、本来法律で定めるべき事項を政令に委任するものであり、当該委任は憲法41 条に反し許されない。",
    A :answer[1] },
  {C: "行政立法について",
    Q : "監獄法（当時）の委任を受けて定められた同法施行規則（省令）において、原則として被勾留者と幼年者との接見を許さないと定めていることは、事物を弁別する能力のない幼年者の心情を害することがないようにという配慮の下に設けられたものであるとしても、法律によらないで被勾留者の接見の自由を著しく制限するものであって、法の委任の範囲を超えるものといえ、当該施行規則の規定は無効である。",
    A :answer[0] },
  {C: "行政立法について",
    Q : "薬事法（当時）の委任を受けて、同法施行規則（省令）において一部の医薬品について郵便等販売をしてはならないと定めることについて、当該施行規則の規定が法律の委任の範囲を逸脱したものではないというためには、もっぱら法律中の根拠規定それ自体から、郵便等販売を規制する内容の省令の制定を委任する授権の趣旨が明確に読み取れることを要するものというべきであり、その判断において立法過程における議論を考慮したり、根拠規定以外の諸規定を参照して判断をすることは許されない。",
    A :answer[1] },
  {C: "行政立法について",
    Q : "児童扶養手当法の委任を受けて定められた同法施行令（政令）の規定において、支給対象となる婚姻外懐胎児童について「（父から認知された児童を除く。）」という括弧書きが設けられていることについては、憲法に違反するものでもなく、父の不存在を指標として児童扶養手当の支給対象となる児童の範囲を画することはそれなりに合理的なものともいえるから、それを設けたことは、政令制定者の裁量の範囲内に属するものであり、違憲、違法ではない。",
    A :answer[1] },
  {C: "行政立法について",
    Q : "銃砲刀剣類所持等取締法が、銃砲刀剣類の所持を原則として禁止した上で、美術品として価値のある刀剣類の所持を認めるための登録の方法や鑑定基準等を定めることを銃砲刀剣類登録規則（省令）に委任している場合に、当該登録規則において登録の対象を日本刀に限定したことについては、法律によらないで美術品の所有の自由を著しく制限するものであって、法の委任の範囲を超えるものといえ、当該登録規則の規定は無効である。",
    A :answer[1] },
  {C: "行政手続法が定める意見公募手続について",
    Q : "命令等制定機関は、命令等を定めようとする場合には、当該命令等の案およびこれに関連する資料をあらかじめ公示して、広く一般の意見を求めなければならない。",
    A :answer[0] },
  {C: "行政手続法が定める意見公募手続について",
    Q : "命令等制定機関は、定めようとする命令等が、他の行政機関が意見公募手続を実施して定めた命令等と実質的に同一の命令等であったとしても、自らが意見公募手続を実施しなければならない。",
    A :answer[1] },
  {C: "行政手続法が定める意見公募手続について",
    Q : "命令等制定機関は、命令等を定める根拠となる法令の規定の削除に伴い当然必要とされる当該命令等の廃止をしようとするときでも、意見公募手続を実施しなければならない。",
    A :answer[1] },
  {C: "行政手続法が定める意見公募手続について",
    Q : "命令等制定機関は、意見公募手続の実施後に命令等を定めるときには所定の事項を公示する必要があるが、意見公募手続の実施後に命令等を定めないこととした場合には、その旨につき特段の公示を行う必要はない。",
    A :answer[1] },
  {C: "行政手続法が定める意見公募手続について",
    Q : "命令等制定機関は、所定の事由に該当することを理由として意見公募手続を実施しないで命令等を定めた場合には、当該命令等の公布と同時期に、命令等の題名及び趣旨について公示しなければならないが、意見公募手続を実施しなかった理由については公示する必要はない。",
    A :answer[1] },
  {C: "理由の提示に関する次の記述のうち、行政手続法の規定または最高裁判所の判例に照らし、妥当なもの",
    Q : "行政庁は、申請により求められた許認可等の処分をする場合、当該申請をした者以外の当該処分につき利害関係を有するものと認められる者から請求があったときは、当該処分の理由を示さなければならない。",
    A :answer[1] },
  {C: "理由の提示に関する次の記述のうち、行政手続法の規定または最高裁判所の判例に照らし、妥当なもの",
    Q : "行政庁は、申請により求められた許認可等を拒否する処分をする場合でも、当該申請が法令に定められた形式上の要件に適合しないことを理由とするときは、申請者に対して当該処分の理由を示す必要はない。",
    A :answer[1] },
  {C: "理由の提示に関する次の記述のうち、行政手続法の規定または最高裁判所の判例に照らし、妥当なもの",
    Q : "行政庁は、理由を示さないで不利益処分をすべき差し迫った必要がある場合であれば、処分と同時にその理由を示す必要はなく、それが困難である場合を除き、当該処分後の相当の期間内にこれを示せば足りる。",
    A :answer[0] },
  {C: "理由の提示に関する次の記述のうち、行政手続法の規定または最高裁判所の判例に照らし、妥当なもの",
    Q : "公文書の非開示決定に付記すべき理由については、当該公文書の内容を秘匿する必要があるため、非開示の根拠規定を示すだけで足りる。",
    A :answer[1] },
  {C: "理由の提示に関する次の記述のうち、行政手続法の規定または最高裁判所の判例に照らし、妥当なもの",
    Q : "旅券法に基づく一般旅券の発給拒否通知書に付記すべき理由については、いかなる事実関係に基づきいかなる法規を適用して拒否されたかに関し、その申請者が事前に了知しうる事情の下であれば、単に発給拒否の根拠規定を示すだけで足りる。",
    A :answer[1] },
  {C: "行政指導についての行政手続法の規定にについて",
    Q : "行政指導に携わる者は、その相手方が行政指導に従わなかったことを理由として、不利益な取扱いをしてはならないとされているが、その定めが適用されるのは当該行政指導の根拠規定が法律に置かれているものに限られる。",
    A :answer[1] },
  {C: "行政指導についての行政手続法の規定にについて",
    Q : "行政指導に携わる者は、当該行政指導をする際に、行政機関が許認可等をする権限を行使し得る旨を示すときは、その相手方に対して、行政手続法が定める事項を示さなければならず、当該行政指導が口頭でされた場合において、これら各事項を記載した書面の交付をその相手方から求められたときは、行政上特別の支障がない限り、これを交付しなければならない。",
    A :answer[0] },
  {C: "行政指導についての行政手続法の規定にについて",
    Q : "行政指導をすることを求める申出が、当該行政指導をする権限を有する行政機関に対して適法になされたものであったとしても、当該行政機関は、当該申出に対して諾否の応答をすべきものとされているわけではない。",
    A :answer[0] },
  {C: "行政指導についての行政手続法の規定にについて",
    Q : "地方公共団体の機関がする行政指導については、その根拠となる規定が法律に置かれているものであれば、行政指導について定める行政手続法の規定は適用される。",
    A :answer[1] },
  {C: "行政不服審査法が定める執行停止について",
    Q : "審査請求人の申立てがあった場合において、処分、処分の執行または手続の続行により生ずる重大な損害を避けるために緊急の必要があると認めるときは、本案について理由がないとみえるときでも、審査庁は、執行停止をしなければならない。",
    A :answer[1] },
  {C: "行政不服審査法が定める執行停止について",
    Q : "審査庁は、いったんその必要性を認めて執行停止をした以上、その後の事情の変更を理由として、当該執行停止を取り消すことはできない。",
    A :answer[1] },
  {C: "行政不服審査法が定める執行停止について",
    Q : "審理員は執行停止をすべき旨の意見書を審査庁に提出することができ、提出を受けた当該審査庁は、速やかに、執行停止をするかどうかを決定しなければならない。",
    A :answer[0] },
  {C: "行政不服審査法が定める執行停止について",
    Q : "再調査の請求は、処分庁自身が簡易な手続で事実関係の調査をする手続であるから、再調査の請求において、請求人は執行停止を申し立てることはできない。",
    A :answer[1] },
  {C: "行政不服審査法が定める執行停止について",
    Q : "審査庁が処分庁または処分庁の上級行政庁のいずれでもない場合には、審査庁は、審査請求人の申立てにより執行停止を行うことはできない。",
    A :answer[1] },
    // ※令和3年度問14まで完了済み
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },
  {C: "",
    Q : "",
    A :answer[0] },

]


function App() {

const [qs , setQs] = useState(aaa[num]);
const [count , setCount] = useState(0);
const [correct , setCorrect] = useState(0);
const [word , setWord] = useState([]);
const [correctWord , setCorrectWord] = useState([]);
const [aa , setAa] = useState("");
const [bb , setBb] = useState("")



useEffect(()=>{
   setQs (aaa[Math.floor( Math.random() * 54)])
}, [count]);

const handleClick = (e)=>{
  if ( qs.A === e.target.value){
      setAa("⚪︎");
      setTimeout(() => {
        setAa("");
      }, 1000);
      setTimeout(() => {
        setCorrectWord([
          ...correctWord,
          {
            correctText : qs.Q,
            correctAnsser : qs.A
          }
        ]);
          setCount(count + 1);
          setCorrect(correct + 1);
      }, 1000);
  }else{
    setBb("×");
    setTimeout(() => {
      setBb("");
    }, 1000);
    setTimeout(() => {
      setWord([
        ...word,
        {
          text : qs.Q,
          ansser : qs.A
        }
      ]);
      setCount(count + 1)
    }, 1000);
    
  }
}



  return (
    <div className="App">
      <div>
        <p>{qs.C}</p>
        <div className='i'>
          <span className='maru' >
            {aa}
          </span>
          <span className='batsu'>
           {bb}
          </span>
        </div>
        <h3>{qs.Q}</h3>
      </div>
      <div className='buttona'>
        <button value={"○"} onClick={ handleClick} >{answer[0]}</button>
        <button value={"×"} onClick={ handleClick} >{answer[1]}</button>
        <p className='Q'>出題数：{count}</p>
        <p className='C'>正解数：{correct}</p>
        <div className='quiz'>
          <p className='quiz2'>回答した問題</p>
        </div>
        <div>
          <ul>
          {word.map((aaa , index) => (
              <li className="miss" key={index}>
                {aaa.text}&emsp;/&emsp;{"正解は" + aaa.ansser}
              </li>
          ))}
          {correctWord.map((bbb , index2) => (
              <li className="correct" key={index2}>
                {bbb.correctText}&emsp;/&emsp;{"正解は" + bbb.correctAnsser}
              </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
