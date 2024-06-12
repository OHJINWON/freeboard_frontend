import React from 'react';
import { IBoardWriteCommentUIProps } from "./BoardComment.types"
import style from "./write.module.css"
import { Flex, Rate } from 'antd';

export default function BoardCommentWirteUI(props: IBoardWriteCommentUIProps) {

    return (
        <div className={style.board}>
            <div className={style.board_box}>
                <div className={style.board_box_comment}>
                    <p>댓글</p>
                </div>
                <div className={style.board_box_content}>
                    <div>
                        <input className={style.board_box_content_input} type="text" onChange={props.onChangeWrite} placeholder="작성자" value={props.writer}/>
                        <input className={style.board_box_content_input} type="password" onChange={props.onChangePassword} placeholder="비밀번호" value={props.password}/>
                        <Flex gap="middle" vertical>
                            <Rate onChange={props.handleChangeRate} value={props.rateValue}/>
                        </Flex>
                    </div>
                </div>
                <div className={style.board_box_textarea}>
                    <div>
                        <textarea onChange={props.onChangeContents} value={props.contents} placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."/>
                        <div>
                            <p>0/100</p>
                            <button onClick={props.onClickComment}>등록하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}