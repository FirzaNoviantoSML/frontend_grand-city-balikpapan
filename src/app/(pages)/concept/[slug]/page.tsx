import React from 'react'

const ConceptDetail = async ({ params }: { params:Promise<{ slug: string }> }) => {
  const getParams = async () => params;
  const { slug } = await getParams();
  return (
    <div className="mt-32">
        {`ini concept ${slug}`}
    </div>
  );
};

export default ConceptDetail;