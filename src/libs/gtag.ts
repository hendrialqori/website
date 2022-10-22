const pageViewTracker = ( url:string, title: string ): void => {
    (window as any ).gtag('config', process.env.NEXT_PUBLIC_GTAG_ID, {
        page_location: url,
        page_title: title
    })
}

const event = ({ action, category, label, value }) => {
    (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value
    })
}

export { pageViewTracker, event }