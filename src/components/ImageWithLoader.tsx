import { useState, useEffect } from 'react'

interface ImageWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string
}

export const ImageWithLoader = ({ containerClassName = "", className = "", alt, ...props }: ImageWithLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
  }, [props.src])

  return (
    <div className={`relative flex items-center justify-center ${containerClassName}`}>
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 rounded-lg animate-pulse z-10">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
          <span className="text-sm font-medium text-gray-500">Cargando...</span>
        </div>
      )}
      <img
        {...props}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </div>
  )
}
