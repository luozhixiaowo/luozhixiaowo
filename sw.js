/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7e041d8f0facaaf4ab72b7ef4af3b2b3"],["/about/index.html","aead3f4d43c4e3f1e3b25031ac0c8c80"],["/archives/2006/08/index.html","d9b18111f156784363ad681f5cf57442"],["/archives/2006/index.html","21ba64e5114132e56a18db4f5be5c9c8"],["/archives/2021/03/index.html","cd29f2f7861d264c0a6a21500d1094b2"],["/archives/2021/08/index.html","43a4e597a3c623c7d85b51fce317aee4"],["/archives/2021/index.html","cb28b3109d7d5e92719f8eaef5d2f217"],["/archives/2022/05/index.html","e5d6133282345a3b2919fd579ec37f4b"],["/archives/2022/05/page/2/index.html","2f39cf184ba87ea7179a1c0284689033"],["/archives/2022/05/page/3/index.html","e669ec0908d767c829b07e4872b4448d"],["/archives/2022/index.html","1686bb439516e55ffdb6cdf45b107c98"],["/archives/2022/page/2/index.html","e9202a424cd5694d8d6b046a091a20e5"],["/archives/2022/page/3/index.html","f7252c8236c17d6517aabf97b11cfc13"],["/archives/2023/01/index.html","d1ffb81081a8d1419b33cb576b818372"],["/archives/2023/index.html","d53abbdeb13bd14a5d35e94934ede8b0"],["/archives/index.html","f06f1ae4fcae6c63b992bf75b383fb10"],["/archives/page/2/index.html","c7d5487ff46044b83b4d8e66e5dd4a17"],["/archives/page/3/index.html","24bf1127d232b14a3494e9610eb9ff16"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","9fc4ca10126e6745517710cdd570d185"],["/categories/技巧分享/index.html","b5ab91543e85598ade8001220728e156"],["/categories/技术教程/index.html","d015f82c76a4f84aeca327201fe34642"],["/categories/技术教程/page/2/index.html","32b062c60ff8fdb1c74e442030a28cae"],["/categories/源码分享/index.html","6696521f74aae989cbc9db01e5c2215f"],["/categories/福利活动/index.html","fe42c2d6bdc28dbb66479335302dcb4d"],["/categories/网站推荐/index.html","cc4b5fef75d27b1da42d228eb46840dc"],["/categories/网站推荐/page/2/index.html","66aff7aad28b8f7c28e67d1bdc25b5f0"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","dcb4b72d91ea980eaaa1b976330f7c75"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/background1.jpg","457044efc799611e9697f1ff8fa7e344"],["/img/background2.jpg","56bc44d644e0e9ba94b04c6b8282eb90"],["/img/background3.jpg","b3f46b8de3caff0649b0c9b00a77c5aa"],["/img/background4.jpg","0b62e97af473076ca0e4e4a4a3e91148"],["/img/background5.jpg","a85b95a0a926f45ef967c0950a47d815"],["/img/background6.jpg","4ecfb3a6d01e8bb58468da052547efcf"],["/img/background7.jpg","da709e41f74200f960b4c6bdf8baab63"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","71cac34e5590710f1d616b8504423dd1"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","0f93c883491c57b246ad7e8da9adfbe0"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","24c1400577e8915fa2548e5073ab51d4"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","bbecb8196206e3de45d72ad3e66ad452"],["/music/index.html","0910973674fc7cc1f76b5edfc029c4b4"],["/page/2/index.html","e9b880e4194bcb07a92ad76e24fc8b4c"],["/page/3/index.html","be70a48feef425b2f8298967a5fc7067"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/096db3c03b6e/index.html","df3ed71c4fc63236a231ff03e50d935a"],["/posts/1235535247cb/index.html","9fd8feb7f1aa9056aa023083f9842f2d"],["/posts/13b70ad2982c/index.html","8ef35e070517e0a7ddb92220393a5952"],["/posts/15fa81012f63/index.html","3fd44ebfadc86711ccb6d31632244092"],["/posts/1ec0df688f03/index.html","09bbceb7ce2a8d885cbd8138ff567a05"],["/posts/2bb24d491704/index.html","4575dfec371cd92b4200351bcb862b1b"],["/posts/2c9261572067/index.html","19044be32c1af0778be3c279cb10aa4f"],["/posts/304408dfc52f/index.html","55da9ea09f0e7c37a17231924210edcd"],["/posts/41c16cb60b68/index.html","5109c5bf57b67fec21acc7224af4dca0"],["/posts/4358b00bc797/index.html","cad987887873dafa71a10e87e8bdf13f"],["/posts/4acff0774207/index.html","45ab1a92990a4c6e5f2d306ed4ef2bc9"],["/posts/4b6cb4514456/index.html","655e7093ba79be7cb9a115248b5db9d3"],["/posts/6631458408e8/index.html","a73c9f0ac72cdb16346e921a623ae9d5"],["/posts/6cb2454df473/index.html","84eb3b474b88cb775e3427a80165813b"],["/posts/6f929ba7ef0a/index.html","c3c37053e10a718c438a3296b64168e0"],["/posts/76dd1b500ee9/index.html","4a633bc7e2e0d6140c3184e25779bffa"],["/posts/8ef6e275fcc9/index.html","e630dca263a07dc8c2df4ead1024ec6b"],["/posts/94456e62e22c/index.html","e36609d5ecb77f1555e3da05fe34b86c"],["/posts/9792de8b38a6/index.html","63ca7d6950af3ca32b0522106c6c92b6"],["/posts/a84c927bae36/index.html","c406c4726147a2b35c9ecd89b2aa1add"],["/posts/ad5499059bd8/index.html","c94b66002f6d3c3a020e0b40e95cd6f1"],["/posts/b1a6e353d3b0/index.html","a953fbb5862ba7c818480e7ef84a16fb"],["/posts/b478f3198c73/index.html","81aa49dd058dba24a53c965fcc3b400f"],["/posts/c821481d77c0/index.html","9d22300b23ee6412812eb5ff6acd4f69"],["/posts/d911ff6fb3e3/index.html","8ac019f25e7e66fccf08805aca07dccc"],["/posts/ebffabd07766/index.html","170b07fe620914f4ca1c62d8f3ef90a2"],["/posts/edc724f3bf5b/index.html","ec77184a406303424e89ffc13a62d006"],["/posts/f30c3df9c2fc/index.html","7941f6e39387ee8a873a65aab5a4faa2"],["/posts/fb79b38d6277/index.html","41138023b8df04550bcef0f2309f07c6"],["/service-worker.js","9c6a6193a6728d2930128836a4c41894"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","768a95416c02e3f24111b1e2bb83c76a"],["/tags/255-255-255-0/index.html","28cf0c893194427f2d0a7fc67fd210d8"],["/tags/BS架构/index.html","3b766f93285a6846378769dc8e815490"],["/tags/Chrome扩展/index.html","9b8e5fa8a14cb837743990ebdb46bec2"],["/tags/Docusaurus/index.html","7e664643a47c9f12fb5200786f5bf68d"],["/tags/Magiceraser/index.html","68a1959d18891de4c54e2c7dd39b6af8"],["/tags/Neumorphism/index.html","980822459726031f93226ce50a774001"],["/tags/QQ加速/index.html","7a85cc4708fc6dc1ef7ec05955e6ba91"],["/tags/css/index.html","87451ced3cd16a2a0a7732d5146d81e2"],["/tags/dns/index.html","bd8c2a9e0cd962d70d51e56f1dca9b2f"],["/tags/docker/index.html","7fbb2a7f5bfab81ecb598e92a7f12609"],["/tags/ffmpeg/index.html","fd0244a0aab0b4ac1589c79a818e4080"],["/tags/github/index.html","9fdae210fd025132f05280fa3404352e"],["/tags/google/index.html","0783134ca6211b0b109e77e462605f4d"],["/tags/hexo/index.html","5b5e1151030d3a9f5a1cdf9bb3c43b6c"],["/tags/import/index.html","4842ee853a89e96c5b9a0ed499e5fb80"],["/tags/index.html","34185e34a682c72114f38f243d24766f"],["/tags/ip归属/index.html","09e5f9851b1bcff2f3e5f7613547318d"],["/tags/linux/index.html","57451f9edfca48d8639a8ddd29484c70"],["/tags/nginx/index.html","d7e0bc88a24b08b276c99940e43528fb"],["/tags/pdf/index.html","ff88f4d07eda365a2c9381a4aac75ef0"],["/tags/play/index.html","452b6597394f0721bfa00fa56845237b"],["/tags/python/index.html","f064798f87d8a9b0d93540123df46c17"],["/tags/serverless/index.html","7b80f3ee0c0b6ab9dcc78256118ec973"],["/tags/smtp/index.html","8281ae4972499eabce6ee62d8d4b530b"],["/tags/source/index.html","c527fffc70e5cafd598394bcf267b94f"],["/tags/sudo/index.html","2e0895d299ec1988a5ad97bf57559e91"],["/tags/target/index.html","902763c90bcb878481f95b2d0147a683"],["/tags/tinywow/index.html","6603df29bc561b8772bc87964df568fc"],["/tags/usb/index.html","8280096fec82f5202e57c7589ccc55dd"],["/tags/wifi/index.html","8afaa18f5ce76a38f4998caa2175ae95"],["/tags/zip/index.html","a9625414dd44db12f3d31d384d20d01d"],["/tags/下载/index.html","0df93fedbc5a4d557d16787eadec643e"],["/tags/个数/index.html","50075cde17939a27dd495830a0fa78a3"],["/tags/云搜/index.html","f2cde5a2a69f375bc5f5469417c72382"],["/tags/云盘/index.html","d37f7fb7838f4605da66dd6761664fab"],["/tags/代码/index.html","79abadcfb78014347f9bd0d203c44697"],["/tags/免费/index.html","89664f3492110f91f8ec0da736fc1363"],["/tags/函数/index.html","6701fb0c239fbb191928c589c7cf3e2d"],["/tags/分配/index.html","fe24d5f869cf8bca7596cf1c5867e6af"],["/tags/删除图片/index.html","365cb625d2348d65849dc6980d406c0c"],["/tags/剪辑/index.html","d1b69d323bc27e8273e397300546efff"],["/tags/压缩/index.html","3538380e34c821f2e45c2ff9e3d2f0e9"],["/tags/变量/index.html","2666d2fec3e763302706ea9d18df1c2c"],["/tags/同学/index.html","ce8c882ec836b66670dda2a406faddc2"],["/tags/命令/index.html","20f35994543ccb06dd54cbf6221470b7"],["/tags/商店/index.html","b2c898bf03b4ecfbd35a7fd93ff0ef86"],["/tags/图片/index.html","5e12bc352f8001a0c80da59f56714449"],["/tags/地址/index.html","8d1591646e583c21b8f8fa36059ffdb8"],["/tags/堵猫猫/index.html","7c06cb8cd41872adc50789c7fea85e83"],["/tags/处理/index.html","c9bda5d93cbfc2f6843a0e9249a726ca"],["/tags/子网掩码/index.html","4714d3b7be6fdd8aa502dc2fb3d9f731"],["/tags/实用命令/index.html","a782281d10fcec6a148953bbaaa486f9"],["/tags/密码/index.html","19ca845c2bf79f0b5ae82dcb0ea84cd7"],["/tags/小游戏/index.html","a79986d2fda8c409f09d68d718e42de2"],["/tags/小舒同学/index.html","f6a3ee4e107f0c6def006c113bf98614"],["/tags/应用/index.html","1eaaa4463362684eb1194e2172474995"],["/tags/录制/index.html","c8f1b923fa00c0d56eef4582716e2e00"],["/tags/微信/index.html","3462a07d0ffbccc8dc909dd31e6d982e"],["/tags/技巧/index.html","0cb805a6884f221af2a1c6b070c37247"],["/tags/授权/index.html","7987c74248ab6c4e0c0188e994727106"],["/tags/插件/index.html","beab8f37673bc24661c993d629b766ff"],["/tags/搜索/index.html","218ca68e948299da83ed85ea053be490"],["/tags/搜索引擎/index.html","f8d73a6ddf8d56a6bd5bd682a387f4ca"],["/tags/操作/index.html","ca5da21838a615d6d2f71e40102bff34"],["/tags/收藏夹/index.html","85b7aad87e0b0b2ac1c2d098059e4579"],["/tags/文件/index.html","cf501981c1485d74716d65cee4b45a1a"],["/tags/新拟态/index.html","64998666920738567be04694ef6327ac"],["/tags/无损/index.html","75ca6264872fb92de973f2c84aff550f"],["/tags/智影/index.html","b29ce2547087d59cdd98f22fda61f635"],["/tags/查看/index.html","026ab7c4166b20fc6ae220debf09fcb5"],["/tags/树莓/index.html","63102a984bf26a40fe726d7bcd2b2430"],["/tags/格式/index.html","52256caffb1224305ca7cde31d2550c6"],["/tags/油猴插件/index.html","79e94fdf16d7512f105503ea25b297df"],["/tags/流程/index.html","0b86de5c82c39d61c519c2cbc6305537"],["/tags/清图/index.html","7f418f80bd396fef38e26e1541416cb9"],["/tags/源代码/index.html","810b8df38622becc07ba1942c38ce282"],["/tags/生成/index.html","02b0dda31836f032a051db1185729b7e"],["/tags/硬盘/index.html","78cb979247a5aa3dddfa146dfba90049"],["/tags/程序/index.html","2358189f72432271ff8c9a5d6a4f2a75"],["/tags/空间/index.html","c572173753dd2e6876ea9e006b1febfa"],["/tags/站点生成神器/index.html","a7b6c83af9067c9818fea8c7f6db9a54"],["/tags/素材/index.html","9bb3c6452cb52cd54cb9e2ca5f19c4e4"],["/tags/网盘/index.html","026f19b0a02e0a6ea0d4518a902be31b"],["/tags/网站/index.html","864f951f9894572a77f7d34ec4cff153"],["/tags/视频/index.html","84b06e9d5174f079a35605c805e18d7f"],["/tags/资源/index.html","7393d94da4b77162733872ca54d18207"],["/tags/转换/index.html","5f865fee529842716055b03a774be10d"],["/tags/软件/index.html","38ab1365f6c55ff23ea366c806b0b26e"],["/tags/邮箱/index.html","b178fc846e03ecf7973dbcba4a6301b2"],["/tags/镜像/index.html","bd781712dae2be8a2b86c59360e174a0"],["/tags/长度/index.html","5da34afc2556cac2b21ffc8e45305164"],["/tags/高性能网盘/index.html","2c3fa9b0dba0bb708c8e6f854ccb309b"],["/workbox-9dee487a.js","d7415e87425a75ab7e084f38d68538ce"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
