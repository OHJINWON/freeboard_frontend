import Image from "next/image"
import style from "./list.module.css"
import profile from "../../../../../../public/profile.png"
import {getDate} from "../../../../../commons/libraries/utils"

export default function BoardCommentListUI ({data}) {
    return (
        <div className={style.board}>
            <div className={style.board_box}>
                {
                    data?.fetchBoardComments.map(list => 
                        <div key={list._id} className={style.board_box_comment}>
                            <div className={style.comment_profile}>
                                <Image src={profile}/>
                            </div>
                            <div className={style.comment_imformation}>
                                <div className={style.comment_imformation_box}>
                                    <div className={style.comment_imformation_box_top}>
                                        <p className={style.box_top_write}>{list.writer}</p>
                                        <p className={style.box_top_rating}>{list.rating}</p>
                                    </div>
                                    <div className={style.comment_imformation_box_mid}>
                                        <p>{list.contents}</p>
                                    </div>
                                    <div className={style.comment_imformation_box_bottom}>
                                        {getDate(list.createdAt)}
                                    </div>
                                </div>
                            </div>         
                            <div className={style.comment_btn}>
                                수정버튼 및 삭제버튼
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}