import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generateImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea
        placeholder='Ask Ai....'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {generateImg ? (
          <CustomButton
            type='outline'
            title='Asking AI...'
            customStyles='text-xs'
          />
        ) : (
          <>
            <CustomButton
              type='outline'
              title='AI logo'
              handleClick={() => handleSubmit("logo")}
            />

            <CustomButton
              type='filled'
              title='AI Full'
              handleClick={() => handleSubmit("full")}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
