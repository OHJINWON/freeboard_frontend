import style from "./detail.module.css";
import { getDate } from "../../../../commons/libraries/utils"
import { IBoardDetileUI } from "./BoardDetail.types";
import YouTube from "react-youtube";
import { Tooltip } from "antd";

export default function BoardDetailUI(props: IBoardDetileUI) {
    return(
        <div className={style.board}>
            <div className={style.board_box}>
                <div className={style.board_box_content}>
                    <div className={style.user_box}>
                        <div className={style.user_box_left}>
                            <div className={style.user_profile}>
                                <img src="/profile.png" alt="프로필 사진"/>
                            </div>
                            <div className={style.user_left_imfor}>
                                <p>{props.data?.fetchBoard.writer}</p>
                                <p>Date : {getDate(props.data?.fetchBoard.createdAt)}</p>
                            </div>
                        </div>
                        <div className={style.user_box_right}>
                            <div>
                                <img src="/link.png"/>
                            </div>
                            <div className={style.addressBox}>    
                            <Tooltip title={`
                                ${props.data?.fetchBoard.boardAddress?.address ?? ""} 
                                ${props.data?.fetchBoard.boardAddress?.addressDetail ?? ""}`} >
                                <img src="/location.png"/>
                            </Tooltip>
                            </div>
                        </div>                       
                        {/* <p>{props.data?.fetchBoard.boardAddress.address}</p> */}
                                {/* <p>{props.data?.fetchBoard.boardAddress.addressDetail}</p> */}
                    </div>
                    <div className={style.titleBox}>
                        <p>{props.data?.fetchBoard.title}</p>
                    </div>
                    <div className={style.imgBox}>
                        {/* <img src="/image.png"/> */}
                    </div>
                    <div className={style.contentBox}><p>{props.data?.fetchBoard.contents}</p></div>
                    <div className={style.videoBox}>
                        {
                            props.videoId &&
                            <div>
                                <YouTube videoId={props.videoId}opts={{width: "486",height: "240",playerVars: {autoplay: 1,},}}onEnd={(e)=> {e.target.stopVideo()}}/>
                            </div>
                        }
                    </div>
                    <div className={style.likeBox}>
                        <div>
                            <div>
                                <img src="/thumb_up.png"/>
                            </div>
                            <div>
                                <img src="/thumb_down.png"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.btn_list}>
                    <div>
                        <button onClick={props.onClickListMove}>목록으로</button>
                        <button onClick={props.onClickMove}>수정하러가기</button>
                        <button onClick={props.onClickDelete}>삭제하기</button>
                    </div>
                </div>
            </div>    
        </div>
    )
}