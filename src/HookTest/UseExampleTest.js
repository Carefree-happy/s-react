import { useRef, useState } from "react";

const chats = {
    chats: [
        "33bf89f5-c613-4a5e-9c3e-f3daf8f02039",
        "ce47bded-629f-441c-a0aa-990cd17c6608",
    ],
    chatsById: {
        "33bf89f5-c613-4a5e-9c3e-f3daf8f02039": {
            createdAt: 1678892945667,
            id: "33bf89f5-c613-4a5e-9c3e-f3daf8f02039",
            messages: [
                { role: "user", content: "你是谁" },
                { role: "user", content: "我是你" },
                {
                    role: "assistant",
                    content:
                        "我是ChatGPT,一个由OpenAI训练的大型语言模型。我被设计用于与人类进行自然语言交互,并尽可能地提供有用的回答和帮助。",
                },
                { role: "user", content: "我爱你" },
                {
                    role: "assistant",
                    content:
                        "抱歉,我的回答有误。您是一个人类用户,而我是一种由OpenAI训练的大型语言模型,专门用于与人类进行自然语言交互并提供有用的回答和帮助。",
                },
                { role: "user", content: "我恨你" },
                { role: "user", content: "我不认识你" },
                { role: "user", content: "你不认识我" },
                { role: "user", content: "后天会更好" },
            ],
            title: "断网的bug",
            systemMessage:
                "You are ChatGPT, a large language model trained by OpenAI.",
        },
        "ce47bded-629f-441c-a0aa-990cd17c6608": {
            createdAt: 1678893117092,
            id: "ce47bded-629f-441c-a0aa-990cd17c6608",
            messages: [
                { role: "user", content: "拿破仑猫有什么特点" },
                {
                    role: "assistant",
                    content:
                        "拿破仑猫是一种短毛猫,其特点包括：\n\n1. 外貌：拿破仑猫的外貌与英国短毛猫相似,但它们的鼻子更加扁平,眼睛大而圆。\n\n2. 个性：拿破仑猫通常非常友好和亲近人类,喜欢与人互动。它们也很聪明、好奇和活泼,是一种非常有趣的宠物。\n\n3. 声音：拿破仑猫的叫声通常比较轻柔,不会像其他猫那样发出尖锐的叫声。\n\n4. 短腿：拿破仑猫的腿相对较短,使它们看起来更加可爱。\n\n总的来说,拿破仑猫是一种温顺、友好、聪明、好奇、有趣并且外貌可爱的猫咪。",
                },
                { role: "user", content: "它平时吃什么？" },
                { role: "user", content: "猫咪活泼好动怎么办？" },
                {
                    role: "assistant",
                    content:
                        "拿破仑猫的饮食需要均衡和适当,以维持其健康和活力。一般来说,拿破仑猫可以吃以下食物：\n\n1. 干猫粮：选择高质量的干猫粮,其中包含足够的蛋白质、脂肪和其他必需营养素。\n\n2. 湿猫粮：湿猫粮是一种更加水分丰富的食物,有助于保持拿破仑猫的身体水分平衡。\n\n3. 生肉：部分主人会将生肉作为拿破仑猫的食物之一,但应该注意生肉可能存在细菌和寄生虫等危险,因此需要采取适当的措施,如冷冻或煮熟。\n\n4. 猫草：拿破仑猫可以吃一些猫草,帮助消化和排毒。\n\n无论选择哪种食物,都需要注意给予适当的食量,并定期检查拿破仑猫的体重和健康状况,以确保其健康和快乐。",
                },
                { role: "user", content: "猫咪生病了怎么办？" },
                {
                    role: "assistant",
                    content:
                        "如果你的猫咪非常活泼好动,可以考虑以下几点：\n\n1. 提供足够的运动空间：给猫咪提供一个足够大的空间来奔跑、攀爬和玩耍。可以设置一些攀爬架、玩具等,让猫咪有更多的活动空间。\n\n2. 定期陪伴和互动：猫咪是社交动物,需要与主人保持良好的关系。定期陪伴和互动可以帮助猫咪消耗精力,同时也增强了它们的情感联系。\n\n3. 提供适当的玩具：猫咪喜欢追逐、抓挠和咬东西,提供一些适当的玩具可以让它们消耗精力,如小球、老鼠玩具、绳索等。\n\n4. 增加食物难度：可以将猫咪的食物放在一些智力玩具中,让它们通过解决难题来获取食物,这样既能满足它们的需求,又能锻炼它们的智力。\n\n5. 定期训练和激励：对于猫咪的行为进行训练,并及时给予奖励和表扬,可以让它们更加积极地参与到活动中来。\n\n总之,要让猫咪保持健康和快乐,就需要给它们提供足够的运动和活动空间,并与它们建立良好的关系。",
                },
                { role: "user", content: "哦" },
                {
                    role: "assistant",
                    content:
                        "如果你的猫咪生病了,应该立即带它去看兽医。以下是一些可能表明猫咪生病的症状：\n\n1. 食欲减退或完全不吃食物。\n2. 呕吐、腹泻或便秘。\n3. 呼吸困难、咳嗽或打喷嚏。\n4. 眼睛发红、流泪或有分泌物。\n5. 耳朵发炎或有异味。\n6. 行动迟缓、不活泼或不愿意与人互动。\n7. 毛发变得稀疏或有皮肤问题。\n\n如果你注意到这些症状中的任何一个,就应该立即带猫咪去看兽医。在等待看兽医的过程中,可以保持猫咪的舒适和安静,并确保它们有足够的水和食物。",
                },
                { role: "user", content: "猫咪喜欢打架怎么办？" },
                {
                    role: "assistant",
                    content:
                        "猫咪打架是正常的行为,它们会用这种方式来解决领地争夺、社交关系和配对等问题。但是如果打斗过于激烈或频繁,就需要采取措施来防止伤害和减少压力。\n\n以下是一些可以尝试的方法：\n\n1. 提供足够的空间：给每只猫提供足够的空间,让它们有足够的私人领地和活动空间。\n\n2. 分开食物和水源：如果有多只猫,可以分开它们的食物和水源,避免争夺引起打架。\n\n3. 提供多个猫砂盆：每只猫都应该有自己的猫砂盆,以避免排泄物引起争执。\n\n4. 逐渐引入新猫：如果要引入新猫,应该逐渐进行,让它们逐渐熟悉彼此的气味和存在,以避免打架。\n\n5. 使用药物：在某些情况下,兽医可能会建议使用药物来减轻猫咪的焦虑和紧张情绪,从而减少打架的发生。\n\n总之,要防止猫咪打架,需要提供足够的空间和资源,并逐渐引入新猫。如果打斗过于激烈或频繁,应该及时采取措施,如寻求兽医帮助或使用药物。",
                },
            ],
            title: "未接受答案刷新",
            systemMessage:
                "You are ChatGPT, a large language model trained by OpenAI.",
        },
    },
};
const chat = chats.chatsById["33bf89f5-c613-4a5e-9c3e-f3daf8f02039"];

export function UseExampleTest() {
    const baselineRef = useRef(-1);
    const [text, setText] = useState("默认值");

    function handleChange(e) {
        if (e.key === "Backspace") {
            baselineRef.current = 0;
        }
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            e.preventDefault();
            let messages = chat?.messages;
            let len = messages?.length;
            if (!len) return;
            if (!messages) return;
            let userMessages = [-1];
            for (let i = len - 1; i >= 0; i--) {
                let role = messages[i]?.role;
                if (role === "user") {
                    userMessages.unshift(i);
                }
            }
            let userMsgLen = userMessages.length;
            let base = baselineRef.current;
            if (e.key === "ArrowUp") {
                base = (base - 1 + userMsgLen) % userMsgLen;
            } else {
                base = (base + 1) % userMsgLen;
            }
            baselineRef.current = base;
            let content = messages[userMessages[base]]?.content;
            setText(content ? content : "默认值");
        }
    }

    return (
        <form>
            <input onKeyUp={handleChange} />
            {text}

            <ul>
                {chat.messages.map((e, i)=> {
                    return <li key={i}>{e.role} + " , " + {e.content}</li>
                })}
            </ul>
        </form>
    );
}


