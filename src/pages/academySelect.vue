<template>
    <div class='batchFill'>
        <el-steps :active="3" finish-status="success" simple style="margin-top: 20px">
            <el-step title="步骤 1" ></el-step>
            <el-step title="步骤 2" ></el-step>
            <el-step title="步骤 3" ></el-step>
        </el-steps>
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="4"><h3>您的真实高考成绩</h3></el-col>
                    <el-col :span="16">
                        <ul class="scoreUl">
                            <li>
                                <label>科目:</label>
                                <div class="scoreLiDiv">{{scoreData.subject}}</div>
                            </li>
                            <li>
                                <label>总分:</label>
                                <div class="scoreLiDiv">{{scoreData.score}}</div>
                            </li>
                            <li>
                                <label>位次:</label>
                                <div class="scoreLiDiv">{{scoreData.position}}</div>
                            </li>
                        </ul>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <!-- <table cellpadding="0" cellspacing="0" border="0" class="selectHead">
                    <thead>
                        <tr>
                            <th></th>
                            <th>
                                <p>学校 <span>志愿知识</span></p>
                            </th>
                            <th>
                                <p>专业 <span>志愿知识</span></p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in selectList">
                            <td rowspan="6">
                                {{item.title}}
                            </td>
                            <td rowspan="5"></td>
                        </tr>
                    </tbody>
                </table> -->
                <div class="selectHead">
                    <ul class="autoHeight">
                        <li></li>
                        <li>
                            学校 <span><i class="el-icon-question"></i> 志愿知识</span>
                        </li>
                        <li>
                            专业 <span><i class="el-icon-question"></i> 志愿知识</span>
                        </li>
                    </ul>
                </div>
                <div class="selectBody">
                    <div class="selectItem">
                        <ul class="autoHeight" v-for="(item, index) in selectList">
                            <li>
                                <p class="vertical">{{item.title}}</p>
                            </li>
                            <li>
                                <div class="selectNot2Body">
                                    <div class="Not2Body">
                                        <div class="Not2BodyBtn">
                                            <el-input type="text" placeholder="请选择学院" readonly=""></el-input>
                                            <el-button>选择{{item.title}}</el-button>
                                        </div>
                                    </div>   
                                    <div class="Not2Bottom">
                                        <div class="Not2BottomLeft">
                                            是否从专业调配
                                        </div>
                                        <div class="Not2BottomRight">
                                            <el-radio v-model="radio" label="1">是</el-radio>
                                            <el-radio v-model="radio" label="2">否</el-radio>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="lastDiv" v-for="(item , index) in 6">
                                    <span class="lastNum"> {{index + 1}}</span>
                                    <el-input type="text" :placeholder="'请选择专业'+ (index + 1)"></el-input>
                                    <el-button>选择</el-button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "academySelect",
    data() {
        return {
            scoreData:{},
            radio: '1',
            selectList: [
            {
                title: 'A志愿',
            },
            {
                title: 'B志愿',
            },
            {
                title: 'C志愿',
            },
            {
                title: 'D志愿',
            },
            {
                title: 'E志愿',
            }
            ]
        };
    },
    methods: {
    
    },
    beforeRouteLeave(to, from, next) {
         // 设置下一个路由的 meta
        to.meta.keepAlive = true;  // B 跳转到 A 时，让 A 缓存，即不刷新
        next();
    },  
    mounted: function() {
      const _that = this;
        if(_that.$store.scoreData){
            _that.scoreData = _that.$store.scoreData; 
        }
    // else{
    //     _that.$router.push('/recordEntry');
    // }
    }
};
//
</script>

<style lang="less">
    .autoHeight{
        display: block;
        content: '';
        clear: both;
    }
    .batchFill{
        width: 80%;
        height: 100%;
        overflow-y: auto;
        margin: 0 auto;
        section{
            height: calc(100% - 50px);
        }
        .el-steps{
            margin-top: 0!important;
        }
        .el-header{
            background: #f2f0f0;
            height: 50px!important;
            h3{
                min-width: 240px;
                padding: 10px 0;
                margin: 0;
                line-height: 30px;
            }
            .scoreUl{
                list-style: none;
                height: 30px;
                line-height: 30px;
                width: 100%;
                padding: 10px 0;
                margin: 0;
                li{
                    float: left;
                    width: 100px;
                    height: 30px;
                    line-height: 30px;
                    label{
                        width: 40px;
                        height: 30px;
                        line-height: 30px;
                        float: left;
                        font-size: 14px;
                    }
                    .scoreLiDiv{
                        text-align: left;
                        color: #FC8505;
                        font-weight: 600;
                        margin-left: 44px;
                        font-size: 15px;
                        height: 30px;
                        line-height: 30px;
                    }
                }
            }
        }
        .el-main{
            margin-top: 10px;
            background: #fff;
            height: calc(100% - 60px);
            padding: 10px 0;
            .selectHead{
                width: 100%;
                height: 30px;
                ul{
                    list-style: none;
                    padding: 0;
                    li{
                        float: left;
                        line-height: 30px;
                        font-weight: 600;
                        span{
                            cursor: pointer;
                            margin-left: 10px;
                            font-size: 12px;
                            font-weight: 200;
                            i{
                                color: #67BACF;
                            }
                        }
                    }
                    >li:first-child{
                        width: calc(10% - 2px);
                        border:1px solid #ececec;
                        border-right: 0;
                        height: 30px;
                    }
                    >li:nth-child(2){
                        width: calc(60% - 1px);
                        border:1px solid #ececec;
                        border-right: 0;
                        height: 30px;
                    }
                    >li:last-child{
                        width: calc(30% - 1px);
                        border:1px solid #ececec;
                        height: 30px;
                    }
                }
            }
            .selectBody{
                width: 100%;
                height: 50px;
                .selectItem{
                    width: 100%;
                    height: 180px;
                    ul{
                        list-style: none;
                        width: 100%;
                        padding: 0;
                        margin: 0;
                        li{
                            float: left;
                            font-weight: 600;
                            p.vertical{
                                margin:  0 auto;
                                height: calc(100% - 60px);
                                padding-top: 60px; 
                                line-height: 20px;
                                width: 14px;
                            }
                            span{
                                cursor: pointer;
                                margin-left: 10px;
                                font-size: 12px;
                                font-weight: 200;
                                i{
                                    color: #67BACF;
                                }
                            }
                        }
                        >li:first-child{
                            width: calc(10% - 2px);
                            border:1px solid #ececec;
                            border-right: 0;
                            border-bottom: 0;
                            height: 180px;
                        }
                        >li:nth-child(2){
                            width: calc(60% - 1px);
                            border:1px solid #ececec;
                            border-right: 0;
                            border-bottom: 0;
                            height: 180px;
                            .selectNot2Body{
                                width: 100%;
                                height: 180px;
                                .Not2Body{
                                    width: 100%;
                                    height: 139px;
                                    .Not2BodyBtn{
                                        width: 80%;
                                        height: 60px;
                                        line-height: 60px;
                                        margin: 0 auto;
                                        .el-input{
                                            width: calc(100% - 160px);
                                            height: 60px;
                                            float: left;
                                        }
                                        .el-button{
                                            padding:  0 ;
                                            margin-left: 10px;
                                            margin-top: 12px; 
                                            line-height: 36px;
                                            width: 90px;
                                            float: left;
                                        }
                                    }
                                }
                                .Not2Bottom{
                                    width: 100%;
                                    height: 40px;
                                    border-top: 1px solid #ececec;
                                    .Not2BottomLeft{
                                        width: 70px;
                                        float: left;
                                        height: 40px;
                                        border-right: 1px solid #ececec;
                                    }
                                    .Not2BottomRight{
                                        width: calc(100% - 71px);
                                        line-height: 40px;
                                        float: left;
                                        height: 40px;
                                    }
                                }
                            }
                        }
                        >li:last-child{
                            width: calc(30% - 1px);
                            border:1px solid #ececec;
                            height: 180px;
                            border-bottom: 0;
                            .lastDiv{
                                width: 100%;
                                height: 30px;
                                line-height: 30px;
                                span.lastNum{
                                    width: 30px;
                                    line-height: 30px;
                                    text-align: center;
                                    float: left;
                                }
                                .el-input{
                                    width: calc(100% - 140px);
                                    line-height: 30px;
                                    height: 30px;
                                    float: left;
                                    .el-input__inner{
                                        line-height: 24px;
                                        height: 24px;
                                    }
                                }
                                .el-button{
                                    width: 60px;
                                    padding: 0;
                                    margin-left: 10px;
                                    margin-top: 2px;
                                    line-height: 22px;
                                    text-align: center;
                                    float: left;
                                }
                            }
                        }
                    }
                    >ul:first-child>li{
                        border-top: 0;
                    }
                    >ul:last-child>li{
                        border-bottom: 1px solid #ececec;
                    }
                }
                // ul{
                //     list-style: none;
                //     li{
                //         float: left;
                //         line-height: 30px;
                //         font-weight: 600;
                //         span{
                //             cursor: pointer;
                //             margin-left: 10px;
                //             font-size: 12px;
                //             font-weight: 200;
                //             i{
                //                 color: #67BACF;
                //             }
                //         }
                //     }
                //     >li:first-child{
                //         width: calc(10% - 2px);
                //         border:1px solid #ececec;
                //         border-right: 0;
                //         height: 30px;
                //     }
                //     >li:nth-child(2){
                //         width: calc(60% - 1px);
                //         border:1px solid #ececec;
                //         border-right: 0;
                //         height: 30px;
                //     }
                //     >li:last-child{
                //         width: calc(30% - 1px);
                //         border:1px solid #ececec;
                //         height: 30px;
                //     }
                // }
            }
        }
    }
   
</style>
