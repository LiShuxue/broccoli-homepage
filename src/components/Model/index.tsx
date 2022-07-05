import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './index.scss';

// 定义可接受的参数
interface ImodalProps {
  visible?: boolean;
  children?: React.ReactNode;
  title?: React.ReactNode;
  onOk?: () => void;
  okBtnText?: React.ReactNode;
  onCancel?: () => void;
  cancelBtnText?: React.ReactNode;
  okBtnLoading?: boolean;
}

// 使用memo来保证不必要的渲染
const Modal: React.FC<ImodalProps> = React.memo((props) => {
  const {
    visible = false,
    children = null,
    title = '',
    onOk = (e: React.MouseEvent<HTMLElement>) => {},
    okBtnText = '',
    onCancel = (e: React.MouseEvent<HTMLElement>) => {},
    cancelBtnText = '',
    okBtnLoading = false,
  } = props;

  const okBtnClassName = classnames('modal-confirm-btn btn', { 'btn-disabled': okBtnLoading });

  // 点击确认按钮，先判断是否在loading状态
  const clickOk = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (okBtnLoading) return;
      onOk(event);
    },
    [okBtnLoading, onOk]
  );

  // 点击取消按钮，先判断是否在loading状态
  const clickCancel = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (okBtnLoading) return;
      onCancel(event);
    },
    [okBtnLoading, onCancel]
  );

  if (!visible) {
    return null;
  }

  // 使用createPortal将弹窗渲染在body最后
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-mask" onClick={clickCancel}></div>
      <div className="modal-content">
        {/* 弹窗的title部分 */}
        <div className="modal-header">
          <div className="modal-title">
            <i>{title}</i>
            <div className="title-bottom-line"></div>
          </div>
        </div>

        {/* 弹窗的body部分 */}
        <div className="modal-body">{children}</div>

        {/* 弹窗的按钮部分，没有cancel按钮或者OK按钮相关参数时按钮不展示 */}
        <div className="modal-footer">
          {cancelBtnText ? (
            <div className="modal-cancel-btn btn" onClick={clickCancel}>
              {cancelBtnText}
            </div>
          ) : null}
          {okBtnText ? (
            <div className={okBtnClassName} onClick={clickOk}>
              {okBtnText}
            </div>
          ) : null}
        </div>
      </div>
    </div>,
    document.body
  );
});

export default Modal;
