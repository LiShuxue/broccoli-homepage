import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

// 定义可接受的参数
export interface ImodalProps {
  visible?: boolean;
  closeable?: boolean;
  children?: React.ReactNode;
  title?: React.ReactNode;
  onClose?: () => void;
}

// 使用memo来保证不必要的渲染
const Modal: React.FC<ImodalProps> = React.memo((props) => {
  const {
    visible = false,
    closeable = true,
    children = null,
    title = '',
    onClose = (e: React.MouseEvent<HTMLElement>) => {},
  } = props;

  // 点击关闭
  const close = (event: React.MouseEvent<HTMLElement>) => {
    if (!closeable) return;
    onClose && onClose(event);
  };

  if (!visible) {
    return null;
  }

  // 使用createPortal将弹窗渲染在body最后
  return ReactDOM.createPortal(
    <div className="modal">
      {/* 弹窗遮罩层 */}
      <div className="modal-mask" onClick={close}></div>
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
      </div>
    </div>,
    document.body
  );
});

export default Modal;
