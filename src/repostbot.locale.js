//  Translators:
//  Chinese: News#1692
//  French: Cocam123 | Cocam DEV Account#5342 (on Discord)
//
//  Contribute translations through commiting to repository
//  or send it on my Discord server to #┇repostbot-locales channel.
//
//  Please use localization codes that Discord uses:
//  https://discord.com/developers/docs/reference#locales

module.exports = {
    messageRepostedA: function(a){
        switch(a){
            case "fr": return "Reposté par ";
            case "ru": return "Переслал(-а) ";
            case "zh-CN": return "转发者 ";
            case "zh-TW": return "轉發者 ";
            default: return "Reposted by ";
        }
    },
    messageRepostedB: function(a){
        switch(a){
            case "fr": return " par ";
            case "ru": return " из ";
            case "zh-CN": return " 由 ";
            case "zh-TW": return " 由 ";
            default: return " from ";
        }
    },
    messageOriginalTimestamp: function(a){
        switch(a){
            case "fr": return ", message original envoyé sur:";
            case "ru": return ", исходное сообщение отправлено";
            case "zh-CN": return ", 原信息发布时间";
            case "zh-TW": return ", 原信息發佈時間";
            default: return ", original message sent on";
        }
    },
    dialogLabel: function(a){
        switch(a){
            case "fr": return "Choisissez où vous voulez reposter ce message:";
            case "ru": return "Куда Вы хотите переслать это сообщение:";
            case "zh-CN": return "选择信息转发目的地:";
            case "zh-TW": return "選擇信息轉發目的地:";
            default: return "Choose where You want to repost this message:";
        }
    },
    dialogContainsEmbedsA: function(a){
        switch(a){
            case "fr": return " contient ";
            case "ru": return " содержит ";
            case "zh-CN": return " 包含 ";
            case "zh-TW": return " 包含 ";
            default: return " contains ";
        }
    },
    dialogContainsEmbedsB: function(a){
        switch(a){
            case "fr": return " embeds";
            case "ru": return " встраиваний";
            case "zh-CN": return " 嵌入";
            case "zh-TW": return " 嵌入";
            default: return " embeds";
        }
    },
    dialogContainsAttachmentsA: function(a){
        switch(a){
            case "fr": return " et ";
            case "ru": return " и еще ";
            case "zh-CN": return " 与 ";
            case "zh-TW": return " 與 ";
            default: return " and ";
        }
    },
    dialogContainsAttachmentsB: function(a){
        switch(a){
            case "fr": return " plus de média";
            case "ru": return " медиафайлов";
            case "zh-CN": return " 更多媒体";
            case "zh-TW": return " 更多媒體";
            default: return " more media";
        }
    },
    modalTitle: function(a){
        switch(a){
            case "fr": return "reposter ce message";
            case "ru": return "Переслать это сообщение";
            case "zh-CN": return "转发此信息";
            case "zh-TW": return "轉發此信息";
            default: return "Repost this message";
        }
    },
    guildSelect: function(a){
        switch(a){
            case "fr": return "Choisissez un serveur...";
            case "ru": return "Выберите сервер...";
            case "zh-CN": return "选择服务器...";
            case "zh-TW": return "選擇伺服器...";
            default: return "Choose a server...";
        }
    },
    channelSelect: function(a){
        switch(a){
            case "fr": return "Choisissez un canal...";
            case "ru": return "Выберите канал...";
            case "zh-CN": return "选择频道...";
            case "zh-TW": return "選擇頻道...";
            default: return "Choose a channel..."
        }
    },
    guildSelectDMOption: function(a){
        switch(a){
            case "fr": return "RepostBot messages privées";
            case "ru": return "Личные сообщения Репост-бота";
            case "zh-CN": return "RepostBot 的私人信箱";
            case "zh-TW": return "RepostBot 的私人信箱";
            default: return "RepostBot's DM";
        }
    },
    repostButton: function(a){
        switch(a){
            case "fr": return "Reposter ce message";
            case "ru": return "Переслать сообщение";
            case "zh-CN": return "转发此信息";
            case "zh-TW": return "轉發此信息";
            default: return "Repost this message";
        }
    },
    repostSuccess: function(a){
        switch(a){
            case "fr": return "Le message a bien été reposté ! Vous pouvez voir le message en cliquant sur le lien ci-dessous\n";
            case "ru": return "Сообщение переслано успешно! Вы можете посмотреть, нажав на ссылку ниже:\n";
            case "zh-CN": return "信息转发成功！ 你可以在以下链接看到转发信息:\n";
            case "zh-TW": return "信息轉發成功！ 你可以在以下鏈接看到轉發信息:\n";
            default: return "Message reposted succesfully! You can see reposted message by clicking the link below:\n";
        }
    },
    errorDM: function(a){
        switch(a){
            case "fr": return "Une erreur est survenue. Il semblerait que vous ayez fermé vos messages privées";
            case "ru": return "Произошла ошибка! Возможно, у Вас закрыты личные сообщения.";
            case "zh-CN": return "信息转发失败！ 请开放你的私人信箱.";
            case "zh-TW": return "信息轉發失敗！ 請開放你的私人信箱.";
            default: return "Repost failed! It seems You have got your DMs closed.";
        }
    },
    errorMissingPermission: function(a){
        switch(a){
            case "fr": return "Une erreur est survenue. RepostBot ne peut pas poster de messages ici.";
            case "ru": return "Произошла ошибка! Репост-бот не может переслать сообщение туда.";
            case "zh-CN": return "信息转发失败！ RepostBot 未能在此发布信息.";
            case "zh-TW": return "信息轉發失敗！ RepostBot 未能在此發佈信息.";
            default: return "Repost failed! RepostBot can't post there.";
        }
    },
    errorMessageNotFound: function(a){
        switch(a){
            case "fr": return "Une erreur est survenue. Le message n'a pas été trouvé";
            case "ru": return "Произошла ошибка! Сообщение не найдено.";
            case "zh-CN": return "信息转发失败！ 未能找到信息.";
            case "zh-TW": return "信息轉發失敗！ 未能找到信息.";
            default: return "Repost failed! Message was not found.";
        }
    },
    errorUnknown: function(a){
        switch(a){
            case "fr": return "Une erreur est survenue. Merci de réessayer ultérieurement";
            case "ru": return "Произошла ошибка! Что-то пошло не так, попробуйте еще раз позже.";
            case "zh-CN": return "信息转发失败！ 原因不明， 请稍后再试.";
            case "zh-TW": return "信息轉發失敗！ 原因不明， 請稍後再試.";
            default: return "Repost failed! Something went wrong, please try again later.";
        }
    },
    aboutMe: function(a){
        switch(a){
            case "fr": return "Permet le repost des messages de différents canaux ou serveurs vers un autre. Vous pouvez ajouter ce bot à votre serveur pour permettre le repost des messages entre votre serveur et les autres serveurs";
            case "ru": return "Позволяет пересылать сообщения с одних каналов или серверов в другие. Вы можете пригласить бота на Ваш сервер, чтобы позволить пересылать сообщения между Вашим и другими серверами.";
            case "zh-CN": return "由一个频道或伺服器重发信息到另一个频道或伺服器. 你可以在你的伺服器加入此程序使你的伺服器能重发信息到其他伺服器.";
            case "zh-TW": return "由一個頻道或伺服器重發信息到另一個頻道或伺服器. 你可以在你的伺服器加入此程序使你的伺服器能重發信息到其他伺服器.";
        }
    },
    help: function(a){
        switch(a){
            case "fr": return "Repostbot est un bot avec un but très simple. Reposter les messages d'un canal ou un serveur vers un autre canal/serveur \n\n**Comment utiliser RepostBot**\n:green_circle: Faites un clique droit sur le message que vous voulez reposter\n:green_circle: Cliquez sur `Applications` et cliquez sur `Repost`\n:green_circle: Choisissez le serveur et le canal où vous voulez repost le message\n:green_circle: Cliquez sur `Reposter ce message`\n\n**Comment utiliser RepostBot (à l'ancienne)**\n:green_circle: Faites un clique droit sur le message que vous voulez reposter\n:green_circle: Cliquez sur `Copier le lien du message`\n:green_circle: Allez sur le serveur/canal où vous voulez reposter le message\n:green_circle: Tapez `@RepostBot `, collez le lien et appuyez sur Entrée\n\n**Permissions requises pour RepostBot**\n:green_circle: Voir les salons - Pour que les canaux soient accessible pour RepostBot\n:green_circle: Envoyer des messages - Pour envoyer des messages\n:green_circle: Embeds - Pour laisser RepostBot utiliser les embeds pour les messages repostées\n:green_circle: Joindre des fichiers - Pour envoyer les fichiers du message originale\n:green_circle: Voir les anciens messages - Pour accéder aux messages\n:green_circle: Utiliser des émojis externes - Pour utiliser les émojis du message original\n:green_circle: Utiliser les commandes de l'application - Pour autoriser les membres à intéragir avec le bot avec les commandes /\n\nGitHub repository: https://github.com/SVGvsevolod/RepostBot\n Discord du créateur : https://discord.gg/AGSgvqz";
            case "ru": return "Репост-бот это Дискорд-бот с единственным предназначением - пересылать сообщения с одних каналов или серверов на другие.\n\n**Как использовать Репост-бота (Новомодный способ)**\n:green_circle: Нажмите правой кнопкой мыши по сообщению, которое вы хотите переслать\n:green_circle: Выберите `Приложения` затем `Переслать` и нажмите на него\n:green_circle: Выберите сервер и канал, на который вы хотите переслать\n:green_circle: Нажмите на кнопку `Переслать сообщение`\n\n**Как использовать Репост-бота (Стародревний способ)**\n:green_circle: Нажмите правой кнопкой мыши по сообщению, которое вы хотите переслать\n:green_circle: Нажмите на пункт `Скопировать ссылку на сообщение`\n:green_circle: Переключитесь на нужный сервер/канал\n:green_circle: Напишите `@RepostBot `, вставьте скопированную ссылку и нажмите Enter\n\n**Необходимые права для Репост-бота**\n:green_circle: Просмотр каналов - чтобы Репост-бот имел доступ к каналам и сообщениям\n:green_circle: Отправлять сообщения - чтобы, очевидно, отправлять сообщения\n:green_circle: Встраивать ссылки - чтобы позволить Репост-боту использовать встраивания\n:green_circle: Прикреплять файлы - чтобы позволить пересылать медиафайлы с исходного сообщения\n:green_circle: Читать историю сообщений - чтобы иметь доступ к исходным сообщениям\n:green_circle: Использовать внешние эмодзи/стикеры - чтобы иметь возможность передавать эмодзи и/или стикеры с исходных сообщений\n:green_circle: Использовать команды приложения - чтобы позволить участникам использовать новомодный способ взаимодействия с ботом\n\nGitHub repository: https://github.com/SVGvsevolod/RepostBot\nДискорд сервер создателя: https://discord.gg/xDFF7Jn";
            case "zh-CN": return "RepostBot 为一个简单的目的而设 - 由一个服务器或频道重发信息到另一个服务器或频道.\n\n**如何使用 RepostBot (现代方法)**\n:green_circle: 在你想重发的信息按右键\n:green_circle: 选择 `APP` 然后按 `重发`\n:green_circle: 选择目的地服务器和频道\n:green_circle: 按重`发此信息`\n\n**如何使用 RepostBot (古老方法)**\n:green_circle: 在你想重发的信息按右键\n:green_circle: 选择`复制消息链接`\n:green_circle: 手动开启目的地服务器/频道\n:green_circle: 输入 `@RepostBot `, 贴上已复制的信息链接然后按 Enter\n\n**RepostBot 需要的权限**\n:green_circle: 查看频道 - 使RepostBot能看到频道和其信息\n:green_circle: 发送消息 - 明显\n:green_circle: 嵌入链接 - 使RepostBot能在重发信息中重建嵌入链接元素\n:green_circle: 添加附件 - 在重发信息中加入原本的附加档案\n:green_circle: 阅读消息历史 - 收取原始信息\n:green_circle: 使用外部表情符号/贴纸 - 重发原有的外来表情符号/贴纸\n:green_circle: 使用 APP 命令 - 使用家能以现代方法对此程序发送指令\n\nGitHub repository: https://github.com/SVGvsevolod/RepostBot\n制造者的服务器： https://discord.gg/AGSgvqz";
            case "zh-TW": return "RepostBot 為一個簡單的目的而設 - 由一個伺服器或頻道重發信息到另一個伺服器或頻道.\n\n**如何使用 RepostBot (現代方法)**\n:green_circle: 在你想重發的信息按右鍵\n:green_circle: 選擇 `應用程式` 然後按 `重發`\n:green_circle: 選擇目的地伺服器和頻道\n:green_circle: 按重`發此信息`\n\n**如何使用 RepostBot (古老方法)**\n:green_circle: 在你想重發的信息按右鍵\n:green_circle: 選擇`複製訊息連結`\n:green_circle: 手動開啓目的地伺服器/頻道\n:green_circle: 輸入 `@RepostBot `, 貼上已複製的信息鏈接然後按 Enter\n\n**RepostBot 需要的權限**\n:green_circle: 檢視頻道 - 使RepostBot能看到頻道和其信息\n:green_circle: 發送訊息 - 明顯\n:green_circle: 嵌入連結 - 使RepostBot能在重發信息中重建嵌入鏈接元素\n:green_circle: 附加檔案 - 在重發信息中加入原本的附加檔案\n:green_circle: 讀取訊息歷史 - 收取原始信息\n:green_circle: 使用外部表情符號/貼圖 - 重發原有的外來表情符號/貼紙\n:green_circle: 使用應用程式命令 - 使用家能以現代方法對此程序發送指令\n\nGitHub repository: https://github.com/SVGvsevolod/RepostBot\n製造者的伺服器： https://discord.gg/AGSgvqz";
            default: return "RepostBot is a Discord bot with a simple purpose - reposting messages from one channels or servers to another.\n\n**How to use RepostBot (Modern way)**\n:green_circle: Right-click on the message you want to repost\n:green_circle: Choose `Apps` then `Repost` and click it\n:green_circle: Pick server and channel you want to repost to\n:green_circle: Click `Repost this message` button\n\n**How to use RepostBot (Old-fashioned way)**\n:green_circle: Right-click on the message you want to repost\n:green_circle: Click `Copy Message Link` option\n:green_circle: Go to the server/channel you want to repost to\n:green_circle: Type `@RepostBot `, paste copied link and press Enter\n\n**Required permissions for RepostBot**\n:green_circle: View channels - to make channel and its messages accessible for RepostBot\n:green_circle: Send Messages - to send messages, obviously\n:green_circle: Embed Links - to let RepostBot use embeds for reposted messages\n:green_circle: Attach Files - to resend attachments from original message\n:green_circle: Read Message History - to access original messages\n:green_circle: Use External Emojis/Stickers - to pass emojis and/or stickers from original messages\n:green_circle: Use Application Commands - to allow members to use modern way of interacting with bot\n\nGitHub repository: https://github.com/SVGvsevolod/RepostBot\nCreator's Discord Server: https://discord.gg/AGSgvqz";
        }
    },
    welcome: function(a){
        switch(a){
            case "fr": return "Merci d'avoir ajouté RepostBot sur votre serveur. \n\nRepostbot est un bot avec un but très simple. Reposter les messages d'un canal ou un serveur vers un autre canal/serveur \n\n**Comment utiliser RepostBot**\n:green_circle: Faites un clique droit sur le message que vous voulez reposter\n:green_circle: Cliquez sur `Applications` et cliquez sur `Repost`\n:green_circle: Choisissez le serveur et le canal où vous voulez repost le message\n:green_circle: Cliquez sur `Reposter ce message`\n\n**Comment utiliser RepostBot (à l'ancienne)**\n:green_circle: Faites un clique droit sur le message que vous voulez reposter\n:green_circle: Cliquez sur `Copier le lien du message`\n:green_circle: Allez sur le serveur/canal où vous voulez reposter le message\n:green_circle: Tapez `@RepostBot `, collez le lien et appuyez sur Entrée\n\n**Permissions requises pour RepostBot**\n:green_circle: Voir les salons - Pour que les canaux soient accessible pour RepostBot\n:green_circle: Envoyer des messages - Pour envoyer des messages\n:green_circle: Embeds - Pour laisser RepostBot utiliser les embeds pour les messages repostées\n:green_circle: Joindre des fichiers - Pour envoyer les fichiers du message originale\n:green_circle: Voir les anciens messages - Pour accéder aux messages\n:green_circle: Utiliser des émojis externes - Pour utiliser les émojis du message original\n:green_circle: Utiliser les commandes de l'application - Pour autoriser les membres à intéragir avec le bot avec les commandes /\n\nVous pouvez accéder à ces informations à tout moment avec la commande /help ou en envoyant `@RepostBot help`.\n\nGitHub repository: https://github.com/SVGvsevolod/RepostBot\n Discord du créateur : https://discord.gg/AGSgvqz";
            case "ru": return "Спасибо за то, что добавили Репост-бота на Ваш сервер.\n\nРепост-бот это Дискорд-бот с единственным предназначением - пересылать сообщения с одних каналов или серверов на другие.\n\n**Как использовать Репост-бота (Новомодный способ)**\n:green_circle: Нажмите правой кнопкой мыши по сообщению, которое вы хотите переслать\n:green_circle: Выберите `Приложения` затем `Переслать` и нажмите на него\n:green_circle: Выберите сервер и канал, на который вы хотите переслать\n:green_circle: Нажмите на кнопку `Переслать сообщение`\n\n**Как использовать Репост-бота (Стародревний способ)**\n:green_circle: Нажмите правой кнопкой мыши по сообщению, которое вы хотите переслать\n:green_circle: Нажмите на пункт `Скопировать ссылку на сообщение`\n:green_circle: Переключитесь на нужный сервер/канал\n:green_circle: Напишите `@RepostBot `, вставьте скопированную ссылку и нажмите Enter\n\n**Необходимые права для Репост-бота**\n:green_circle: Просмотр каналов - чтобы Репост-бот имел доступ к каналам и сообщениям\n:green_circle: Отправлять сообщения - чтобы, очевидно, отправлять сообщения\n:green_circle: Встраивать ссылки - чтобы позволить Репост-боту использовать встраивания\n:green_circle: Прикреплять файлы - чтобы позволить пересылать медиафайлы с исходного сообщения\n:green_circle: Читать историю сообщений - чтобы иметь доступ к исходным сообщениям\n:green_circle: Использовать внешние эмодзи/стикеры - чтобы иметь возможность передавать эмодзи и/или стикеры с исходных сообщений\n:green_circle: Использовать команды приложения - чтобы позволить участникам использовать новомодный способ взаимодействия с ботом\n\nВы можете обратиться за этой справкой снова через слэш-команду `/справка` или отправив сообщение со следующим содержанием `@RepostBot help`\n\nGitHub repository: https://github.com/SVGvsevolod/RepostBot\nДискорд сервер создателя: https://discord.gg/xDFF7Jn";
            case "zh-CN": return "感谢你邀请 RepostBot 到你的服务器.\n\nRepostBot 为一个简单的目的而设 - 由一个服务器或频道重发信息到另一个服务器或频道.\n\n**如何使用 RepostBot (现代方法)**\n:green_circle: 在你想重发的信息按右键\n:green_circle: 选择 `APP` 然后按 `重发`\n:green_circle: 选择目的地服务器和频道\n:green_circle: 按重`发此信息`\n\n**如何使用 RepostBot (古老方法)**\n:green_circle: 在你想重发的信息按右键\n:green_circle: 选择`复制消息链接`\n:green_circle: 手动开启目的地服务器/频道\n:green_circle: 输入 `@RepostBot `, 贴上已复制的信息链接然后按 Enter\n\n**RepostBot 需要的权限**\n:green_circle: 查看频道 - 使RepostBot能看到频道和其信息\n:green_circle: 发送消息 - 明显\n:green_circle: 嵌入链接 - 使RepostBot能在重发信息中重建嵌入链接元素\n:green_circle: 添加附件 - 在重发信息中加入原本的附加档案\n:green_circle: 阅读消息历史 - 收取原始信息\n:green_circle: 使用外部表情符号/贴纸 - 重发原有的外来表情符号/贴纸\n:green_circle: 使用 APP 命令 - 使用家能以现代方法对此程序发送指令\n\n你可以使用 /help 指令或在频道里输入 @RepostBot help 以查看此页.\n\nGitHub repository: https://github.com/SVGvsevolod/RepostBot\n制造者的服务器： https://discord.gg/AGSgvqz";
            case "zh-TW": return "感謝你邀請 RepostBot 到你的伺服器.\n\nRepostBot 為一個簡單的目的而設 - 由一個伺服器或頻道重發信息到另一個伺服器或頻道.\n\n**如何使用 RepostBot (現代方法)**\n:green_circle: 在你想重發的信息按右鍵\n:green_circle: 選擇 `應用程式` 然後按 `重發`\n:green_circle: 選擇目的地伺服器和頻道\n:green_circle: 按重`發此信息`\n\n**如何使用 RepostBot (古老方法)**\n:green_circle: 在你想重發的信息按右鍵\n:green_circle: 選擇`複製訊息連結`\n:green_circle: 手動開啓目的地伺服器/頻道\n:green_circle: 輸入 `@RepostBot `, 貼上已複製的信息鏈接然後按 Enter\n\n**RepostBot 需要的權限**\n:green_circle: 檢視頻道 - 使RepostBot能看到頻道和其信息\n:green_circle: 發送訊息 - 明顯\n:green_circle: 嵌入連結 - 使RepostBot能在重發信息中重建嵌入鏈接元素\n:green_circle: 附加檔案 - 在重發信息中加入原本的附加檔案\n:green_circle: 讀取訊息歷史 - 收取原始信息\n:green_circle: 使用外部表情符號/貼圖 - 重發原有的外來表情符號/貼紙\n:green_circle: 使用應用程式命令 - 使用家能以現代方法對此程序發送指令\n\n你可以使用 /help 指令或在頻道裏輸入 @RepostBot help 以查看此頁.\n\nGitHub repository: https://github.com/SVGvsevolod/RepostBot\n製造者的伺服器： https://discord.gg/AGSgvqz";
            default: return "Thank You for inviting RepostBot to Your server.\n\nRepostBot is a Discord bot with a simple purpose - reposting messages from one channels or servers to another.\n\n**How to use RepostBot (Modern way)**\n:green_circle: Right-click on the message you want to repost\n:green_circle: Choose `Apps` then `Repost` and click it\n:green_circle: Pick server and channel you want to repost to\n:green_circle: Click `Repost this message` button\n\n**How to use RepostBot (Old-fashioned way)**\n:green_circle: Right-click on the message you want to repost\n:green_circle: Click `Copy Message Link` option\n:green_circle: Go to the server/channel you want to repost to\n:green_circle: Type `@RepostBot `, paste copied link and press Enter\n\n**Required permissions for RepostBot**\n:green_circle: View channels - to make channel and its messages accessible for RepostBot\n:green_circle: Send Messages - to send messages, obviously\n:green_circle: Embed Links - to let RepostBot use embeds for reposted messages\n:green_circle: Attach Files - to resend attachments from original message\n:green_circle: Read Message History - to access original messages\n:green_circle: Use External Emojis/Stickers - to pass emojis and/or stickers from original messages\n:green_circle: Use Application Commands - to allow members to use modern way of interacting with bot\n\nYou can get this help information by using `/help` slash command or sending message with `@RepostBot help`.\n\nGitHub repository: https://github.com/SVGvsevolod/RepostBot\nCreator's Discord Server: https://discord.gg/AGSgvqz";
        }
    }
};