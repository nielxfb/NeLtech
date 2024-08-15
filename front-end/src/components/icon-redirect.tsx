interface IIconRedirect {
    url: string;
    icon: React.ReactNode;
}

function IconRedirect({ url, icon }: IIconRedirect) {
  return (
    <a href={url}>
        {icon}
    </a>
  )
}

export default IconRedirect