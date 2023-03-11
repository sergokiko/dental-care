import React, { FC } from 'react';
import { CntrlClient, LayoutStyle, Page, TArticle, TPage, TProject, TKeyframeAny } from '@cntrl-site/sdk-nextjs';
import { Header } from '../Header/Header';

interface Props {
  project: TProject;
  article: TArticle;
  page: TPage;
  keyframes: TKeyframeAny[];
}

export const HomePage: FC<Props> = ({ project, article, page, keyframes }) => {
  const meta = CntrlClient.getPageMeta(project.meta, page?.meta!);
  return (
    <>
      <Header />
      <Page
        project={project}
        article={article}
        meta={meta}
        keyframes={keyframes}
      />
    </>
  );
};
