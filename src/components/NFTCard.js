import { Modal } from 'antd';
import { useState } from 'react';
import './style.css'

function NFTCard(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    
  return (
    <>
        <div style= {{
            backgroundImage: `url(/${props.nftinfo.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}
        className="drop-shadow-xl w-full min-w-full h-72  hover:scale-75 ease-in-out duration-300">
            
            {/* Add Favourite Button */}
            <div className="cardTop relative top-4 right-4 flex justify-end">
                <div className="grey-bg addFav p-2 w-8 h-8 rounded-full">
                    {props.nftinfo.favourited === false ?
                    <i class="fi fi-ss-heart text-white text-md"></i>
                    :  <i class="fi fi-ss-heart text-red-500 text-md"></i>}
                </div>
            </div>
            {/* Card Body  */}
            <div className="p-4 w-full h-full flex flex-col justify-between" onClick={showModal}>
            </div>

            {/* Card Information  */}
            <div className="cardBottom grey-bg p-2 flex items-center relative bottom-32 m-2">
                <div className="w-11 h-11 mr-4">
                    <img src="/userImg.jpg" className="w-full h-full rounded-full" alt="Profile Pic"/>
                </div>
                <div className='text-white'>
                    <p className="text-xs font-medium">{props.nftinfo.nftname}</p>
                    <p className="text-xs mt-2">@{props.nftinfo.username}</p>
                </div>
            </div>

        </div>

        <Modal title=' ' footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className='h-96 flex justify-center mt-8'>
                <img src={`/${props.nftinfo.image}`} className='w-auto h-full' alt='NFT'/>
            </div>
            
            <div  className='mt-10 flex justify-between items-center'>

                <div>
                    <h1 className='text-xl font-bold'>{props.nftinfo.nftname}</h1>
                </div>

                <div className='mt-4'>
                    <p className='text-xs'>Current Price</p>
                    <p className='text-4xl font-medium'>{props.nftinfo.price}ETH</p>
                </div>
                
            </div>

            <div className='mt-8'>
                <p className='text-sm'>{props.nftinfo.description}</p>
            </div>

            <div className='mt-8 font-medium flex'>
                <p className='text-sm'>Owner Address - </p>
                <p className='text-sm ml-4'>ETLRwv34bgje...KZFE</p>
            </div>

            <div className='mt-10 flex justify-between items-center'>

                <a className='flex-1 text-center ml-2 text-md font-bold grey-bg p-4 text-white' href="https://opensea.io/" target='_blank' rel='noreferrer'>
                    Purchase NFT
                </a>

                {props.nftinfo.favourited === false ?
                <p className='ml-2 text-md font-bold bg-red-400 hover:bg-red-700 p-4 text-white ease-in-out duration-500'>Add to Favourite</p>
                :<p className='ml-2 text-md font-bold bg-gray-400 hover:bg-black p-4 text-white ease-in-out duration-500'>Remove to Favourite</p>}
            
            </div>
        </Modal>
    </>
  );
}

export default NFTCard;
