import {
    CollectionViewer,
    DataSource,
    SelectionChange,
} from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { BehaviorSubject, lastValueFrom, map, merge, Observable } from 'rxjs';
import { Comments } from '../../interfaces/comment.interface';
import { StorieCommentService } from '../../services/storie-comment.service';
